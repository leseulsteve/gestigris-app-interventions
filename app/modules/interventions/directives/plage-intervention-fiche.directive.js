'use strict';

angular.module('interventions').directive('plageInterventionFiche',
  function ($timeout) {
    return {
      restrict: 'E',
      scope: {
        plage: '=',
      },
      templateUrl: 'modules/interventions/views/plage-intervention.fiche.html',
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
      }
    };
  });
