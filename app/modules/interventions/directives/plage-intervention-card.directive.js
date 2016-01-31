'use strict';

angular.module('interventions').directive('plageInterventionCard',
  function () {
    return {
      restrict: 'E',
      scope: {
        plage: '=',
      },
      templateUrl: 'modules/interventions/views/plage-intervention.card.html',
      link: function (scope) {

        scope.$on('imageLoaded', function () {
          scope.showCard = true;
        });

        scope.limitTags = 2;

        scope.showMoreTags = function ($event) {
          $event.stopPropagation();
          scope.limitTags = scope.limitTags ? undefined : 2;
        };
      }
    };
  });
