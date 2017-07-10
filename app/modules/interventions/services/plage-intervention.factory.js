'use strict';

angular.module('interventions').factory('PlageIntervention',
  function (Schema, Moment, Intervention, Conversation) {

    var PlageIntervention = new Schema('plage-intervention');

    PlageIntervention.post('find', function (next) {
      this.date = new Moment(this.date);

      this.listeners = {
        stateChange: []
      };

      if (_.includes(this.states, 'CONFIRMED')) {
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
      // TODO: date
      return PlageIntervention.find();
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

    PlageIntervention.prototype.getConversation = function () {
      return Conversation.findById(this.conversation);
    };

    PlageIntervention.prototype.hasOpen = function () {
      return _.includes(this.states, 'OPEN');
    };

    PlageIntervention.prototype.hasWaiting = function () {
      return _.includes(this.states, 'WAITING');
    };

    PlageIntervention.prototype.hasConfirmed = function () {
      return _.includes(this.states, 'CONFIRMED');
    };

    PlageIntervention.prototype.hasRefused = function () {
      return _.includes(this.states, 'REFUSED');
    };

    PlageIntervention.prototype.hasNewMessages = function () {
      return this.newMessages;
    };

    PlageIntervention.prototype.on = function (event, cb) {
      this.listeners[event].push(cb);
    };

    return PlageIntervention;

  });
