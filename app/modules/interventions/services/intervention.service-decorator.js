'use strict';

angular.module('interventions').config(
  function ($provide) {

    $provide.decorator('Intervention', function ($delegate, $q, $http, Moment, Toast, User) {

      var Intervention = $delegate;

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

      Intervention.prototype.getstatus = function () {
        return this.status;
      };

      Intervention.prototype.isOpen = function () {
        return this.status === 'OPEN';
      };

      Intervention.prototype.isWaiting = function () {
        return this.status === 'WAITING';
      };

      Intervention.prototype.isConfirmed = function () {
        return this.status === 'CONFIRMED';
      };

      Intervention.prototype.canRegister = function () {
        return this.isOpen();
      };

      Intervention.prototype.canUnRegister = function () {
        return this.isWaiting();
      };

      function changestatus(intervention, statusName) {

        var toastMessage;
        switch (statusName) {
        case 'WAITING':
          toastMessage = 'Votre demande a été envoyée.';
          break;
        case 'OPEN':
          toastMessage = 'Votre demande a été annulée.';
          break;
        }
        var toast = new Toast(toastMessage);
        toast.show();

        if (statusName) {
          intervention.status = statusName;
        }
        _.forEach(intervention.listeners.statusChange, function (cb) {
          cb(intervention);
        });
      }

      Intervention.prototype.register = function () {
        if (this.canRegister()) {
          var that = this;
          return $http.post('plage-intervention/' + this.plage + '/intervention/' + this._id + '/demande').then(function () {
            changestatus(that, 'WAITING');
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
            changestatus(that, 'OPEN');
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
  });
