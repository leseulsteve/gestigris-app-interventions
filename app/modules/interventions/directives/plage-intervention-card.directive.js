'use strict';

angular.module('interventions').directive('plageInterventionCard',
  function ($timeout) {
    return {
      restrict: 'E',
      scope: {
        plage: '=',
      },
      templateUrl: 'modules/interventions/views/plage-intervention.card.html',
      link: function (scope, element) {
        $timeout(function () {
          var imageElement = element.find('img');
          if (imageElement.length === 0) {
            scope.showCard = true;
          } else {
            imageElement.bind('load', function () {
              scope.showCard = true;
              scope.$apply();
            });
          }
        });

        scope.limitTags = 2;

        scope.showMoreTags = function ($event) {
          $event.stopPropagation();
          scope.limitTags = scope.limitTags ? undefined : 2;
        };
      }
    };
  });
