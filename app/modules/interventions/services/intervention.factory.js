'use strict';

angular.module('interventions').factory('Intervention',
  function ($q, Moment, InterventionMonitor, DemandeParticipation) {

    var Intervention = function (params) {

      _.assign(this, params);

      var ms = moment(this.date.end).diff(moment(this.date.start));
      this.duree = Moment.duration(ms);
      this.date.start = new Moment(this.date.start);
      this.date.end = new Moment(this.date.end);

      this.listeners = {
        stateChange: []
      };
      this.monitor = new InterventionMonitor(this, 5000);
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

    Intervention.prototype.getState = function () {
      return this.state;
    };

    Intervention.prototype.canRegister = function () {
      return this.isOpen();
    };

    Intervention.prototype.canUnRegister = function () {
      return this.isWaiting();
    };

    function changeState(intervention, stateName) {
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
        return DemandeParticipation.create({
          intervention: this._id
        }).then(function () {
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
        return DemandeParticipation.findOne({
          intervention: this._id
        }).then(function (demande) {
          return demande.remove().then(function () {
            changeState(that, 'OPEN');
          });
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
      if (!this.monitor.isMonitoring()) {
        this.monitor.start(function (rawIntervention) {
          _.assign(that, rawIntervention);
          if (rawIntervention.status !== that.status) {
            changeState(that);
          }
        });
      }
      return function () {
        _.pull(that.listeners[action], cb);
        if (that.listeners[action].length === 0) {
          that.monitor.stop();
        }
      };
    };

    return Intervention;
  });
