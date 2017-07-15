'use strict';

angular.module('interventions').directive('plageInterventionCard',
  function () {
    return {
      restrict: 'E',
      scope: {
        plage: '=',
      },
      templateUrl: 'modules/interventions/views/plage-intervention.card.html'
    };
  });
