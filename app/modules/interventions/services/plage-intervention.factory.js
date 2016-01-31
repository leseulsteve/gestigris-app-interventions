'use strict';

angular.module('interventions').factory('PlageIntervention',
  function (Schema, Moment, Intervention) {

    var PlageIntervention = new Schema('plage-intervention');

    PlageIntervention.postFind = function (plage, next) {
      plage.date = new Moment(plage.date);
      next();
    };

    PlageIntervention.post('find', function (next) {
      PlageIntervention.postFind(this, next);
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
          intervention.plage = that._id;
        });
        return interventions;
      });
    };

    PlageIntervention.prototype.hasOpen = function () {
      return _.contains(this.states, 'OPEN');
    };

    PlageIntervention.prototype.hasWaiting = function () {
      return _.contains(this.states, 'WAITING');
    };

    PlageIntervention.prototype.hasConfirmed = function () {
      return _.contains(this.states, 'CONFIRMED');
    };

    return PlageIntervention;

  });
