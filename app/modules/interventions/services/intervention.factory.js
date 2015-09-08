'use strict';

angular.module('interventions').factory('Intervention',
  function (Schema, $q, Etablissement) {

    var Intervention = new Schema('intervention');

    Intervention.post('find', function (next) {
      var that = this;
      Etablissement.findById(this.etablissement).then(function (etablissement) {
        that.etablissement = etablissement;
        next();
      });
    });

    Intervention.prototype.toString = function () {};

    Intervention.getScheduledInterventions = function (user) {
      user = user;
      return Etablissement.findById().then(function (etablissement) {
        var deffered = $q.defer();
        deffered.resolve([{
          date: {
            start: new Date(),
            end: new Date()
          },
          etablissement: etablissement
        }, {
          date: {
            start: new Date(),
            end: new Date()
          },
          etablissement: etablissement
        }]);
        return deffered.promise;
      });
    };

    return Intervention;

  });
