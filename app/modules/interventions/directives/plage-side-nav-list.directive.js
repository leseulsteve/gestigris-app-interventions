'use strict';

angular.module('interventions').directive('plageSideNavList',
  function ($rootScope) {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        type: '@',
        chuckSize: '@'
      },
      templateUrl: 'modules/interventions/views/plage-side-nav.list.html',
      link: function (scope, element) {
        element.addClass('nav-list');
        var toWatch = scope.type === 'waiting' ? 'plagesInterventions.waiting' : 'plagesInterventions.confirmed';
        $rootScope.$watch(toWatch, function (plages) {
          if (plages) {
            scope.showPlus = plages.length > scope.chuckSize;
            scope.plages = _.slice(plages, 0, scope.chuckSize);
          }
        });
      }
    };
  });
