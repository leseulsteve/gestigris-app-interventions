'use strict';

angular.module('interventions').factory('Intervention',
  function (Schema, Etablissement, Config, Moment, InterventionType) {

    var Intervention = new Schema('intervention');

    Intervention.post('find', function (next) {

      this.date.start = new Moment(this.date.start);
      this.date.end = new Moment(this.date.end);

      var ms = moment(this.date.end).diff(moment(this.date.start));
      this.duree = Moment.duration(ms);

      var that = this;
      Etablissement.findById(this.etablissement).then(function (etablissement) {
        InterventionType.findById(that.type).then(function (type) {
          that.type = type;
          that.etablissement = etablissement;
          next();
        });
      });
    });

    Intervention.findProchaines = function (query) {
      return Intervention.find(query);
    };

    Intervention.prototype.toString = function () {
      return this.etablissement.toString() + ' - ' + this.date.start.format('D MMMM') + ' (' + this.date.start.format('LT') + ' - ' + this.date.end.format('LT') + ')';
    };

    Intervention.groupByDay = function (interventions) {
      return _.groupBy(_.sortBy(interventions, 'date.start'), function (intervention) {
        return angular.copy(intervention.date.start).startOf('day');
      });
    };

    Intervention.groupByEtablissement = function (interventions) {
      return _.groupBy(interventions, 'etablissement');
    };

    Intervention.prototype.isParticipating = function (user) {
      return _.contains(this.benevoles.confirmes, user._id);
    };

    Intervention.prototype.getConfirmed = function () {
      return this.benevoles.confirmes;
    };

    Intervention.getScheduledInterventions = function (user) {
      return Intervention.find({
        'benevoles.confirmes': user._id
      });
    };

    Intervention.getUrgentInterventions = function (user) {
      return Config.get('interventions').then(function (config) {
        return Intervention.find({
          'date.start': {
            $lte: new Moment().add(config.urgentWindowInDays, 'days').format()
          },
          'benevoles.confirmes': {
            $ne: user._id
          }
        });
      });
    };

    return Intervention;

  });
