'use strict';

angular.module('interventions').config(
  function ($provide) {

    $provide.decorator('PlageIntervention', function ($delegate, Intervention) {

      var PlageIntervention = $delegate;

      PlageIntervention.post('find', function (next) {

        this.listeners = {
          stateChange: []
        };

        if (this.status === 'CONFIRMED') {
          var that = this;
          this.getConversation().then(function (conversation) {
            that.conversation = conversation;
            that.newMessages = conversation.hasNewMessages();
            next();
          });
        } else {
          next();
        }
      });

      PlageIntervention.findProchaines = function () {
        return PlageIntervention.find({
          date: {
            $gte: new Date()
          },
          status: {
            $ne: 'CLOSE'
          }
        });
      };

      PlageIntervention.prototype.getInterventions = function () {
        var that = this;
        return Intervention.find({
          plage: this._id
        }).then(function (interventions) {
          _.forEach(interventions, function (intervention) {
            intervention.on('stateChange', function () {
              PlageIntervention.findById(that._id).then(function (plage) {
                _.assign(that, _.omit(plage, 'listeners'));
                _.forEach(that.listeners.stateChange, function (listener) {
                  listener(that);
                });
              });
            });
          });
          return interventions;
        });
      };

      PlageIntervention.prototype.hasOpen = function () {
        return this.status === 'OPEN';
      };

      PlageIntervention.prototype.hasWaiting = function () {
        return this.status === 'WAITING';
      };

      PlageIntervention.prototype.hasConfirmed = function () {
        return this.status === 'CONFIRMED';
      };

      PlageIntervention.prototype.hasRefused = function () {
        return this.status === 'REFUSED';
      };

      PlageIntervention.prototype.hasNewMessages = function () {
        return this.newMessages;
      };

      PlageIntervention.prototype.on = function (event, cb) {
        this.listeners[event].push(cb);
      };

      return PlageIntervention;

    });

  });
