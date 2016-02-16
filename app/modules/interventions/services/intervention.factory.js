'use strict';

angular.module('interventions').factory('Intervention',
  function ($q, $http, Schema, Moment, Toast, User) {

    var Intervention = new Schema('plage-intervention/:plage/intervention');

    Intervention.post('find', function (next) {
      var ms = new Moment(this.date.end).diff(new Moment(this.date.start));
      this.duree = Moment.duration(ms);
      this.date.start = new Moment(this.date.start);
      this.date.end = new Moment(this.date.end);

      if (this.participants) {
        this.participants = _.map(this.participants, function (participant) {
          return new User(participant);
        });
      }

      this.listeners = {
        stateChange: []
      };

      next();
    });

    Intervention.prototype.getState = function () {
      return this.state;
    };

    Intervention.prototype.isOpen = function () {
      return this.state === 'OPEN';
    };

    Intervention.prototype.isWaiting = function () {
      return this.state === 'WAITING';
    };

    Intervention.prototype.isConfirmed = function () {
      return this.state === 'CONFIRMED';
    };

    Intervention.prototype.canRegister = function () {
      return this.isOpen();
    };

    Intervention.prototype.canUnRegister = function () {
      return this.isWaiting();
    };

    function changeState(intervention, stateName) {

      var toastMessage;
      switch (stateName) {
      case 'WAITING':
        toastMessage = 'Votre demande a été envoyée.';
        break;
      case 'OPEN':
        toastMessage = 'Votre demande a été annulée.';
        break;
      }
      var toast = new Toast(toastMessage);
      toast.show();

      if (stateName) {
        intervention.state = stateName;
      }
      _.forEach(intervention.listeners.stateChange, function (cb) {
        cb(intervention);
      });
    }

    Intervention.prototype.register = function () {
      if (this.canRegister()) {
        var that = this;
        return $http.post('plage-intervention/' + this.plage + '/intervention/' + this._id + '/demande').then(function () {
          changeState(that, 'WAITING');
        });
      } else {
        var deffered = $q.defer();
        deffered.reject({
          message: 'Déjà enregistré'
        });
        return deffered.promise;
      }
    };

    Intervention.prototype.unregister = function () {
      if (this.canUnRegister()) {
        var that = this;
        return $http.delete('plage-intervention/' + this.plage + '/intervention/' + this._id + '/demande').then(function () {
          changeState(that, 'OPEN');
        });
      } else {
        var deffered = $q.defer();
        deffered.reject({
          message: this.isConfirmed() ? 'Est déjà confirmé' : 'N\'est pas enregistré'
        });
        return deffered.promise;
      }
    };

    Intervention.prototype.on = function (action, cb) {
      var that = this;
      this.listeners[action].push(cb);
      return function () {
        _.pull(that.listeners[action], cb);
      };
    };

    return Intervention;

  });
