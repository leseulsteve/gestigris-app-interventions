'use strict';

angular.module('interventions').directive('interventionSection',
  function (Intervention) {
    return {
      restrict: 'E',
      templateUrl: 'modules/interventions/views/interventions.section.html',
      link: function (scope) {
        scope.prochainesInterventions = [];
        Intervention.findProchaines().then(function (interventions) {
          _.forOwn(Intervention.groupByDay(interventions), function (interventions) {
            _.forOwn(Intervention.groupByEtablissement(interventions), function (interventions) {
              scope.prochainesInterventions.push({
                etablissement: interventions[0].etablissement,
                interventions: interventions
              });
            });
          });
        });
      }
    };
  });
