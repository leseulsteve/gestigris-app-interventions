'use strict';

angular.module('interventions').factory('PlageIntervention',
  function (Schema, Moment, Etablissement, Intervention) {

    var PlageIntervention = new Schema('plageintervention');

    PlageIntervention.post('find', function (next) {
      this.date = new Moment(this.date);
      this.etablissement = new Etablissement(this.etablissement);

      this.openInterventions = [];
      this.waitingInterventions = [];
      this.confirmedInterventions = [];

      this.tags = [];

      function addToTags(tags, types) {
        _.forEach(types, function (type) {
          if (!_.contains(_.pluck(tags, '_id'), type._id)) {
            tags.push(type);
          }
        });
      }

      for (var i = 0; i < this.interventions.length; i++) {
        var intervention = new Intervention(this.interventions[i]);
        if (intervention.isOpen()) {
          this.openInterventions.push(intervention);
        }
        if (intervention.isWaiting()) {
          this.waitingInterventions.push(intervention);
        }
        if (intervention.isConfirmed()) {
          this.confirmedInterventions.push(intervention);
        }

        addToTags(this.tags, intervention.types);

        _.sortBy(this.tags, 'poids');
        this.interventions[i] = intervention;
      }
      next();
    });

    PlageIntervention.findProchaines = function () {
      // TODO: filter open
      return PlageIntervention.find();
    };

    PlageIntervention.prototype.hasOpen = function () {
      return this.count('open') > 0;
    };

    PlageIntervention.prototype.hasWaiting = function () {
      return this.count('waiting') > 0;
    };

    PlageIntervention.prototype.hasConfirmed = function () {
      return this.count('confirmed') > 0;
    };

    PlageIntervention.prototype.count = function (what) {
      switch (what) {
      case 'open':
        return this.openInterventions.length;
      case 'waiting':
        return this.waitingInterventions.length;
      case 'confirmed':
        return this.confirmedInterventions.length;
      }
    };

    return PlageIntervention;

  });
