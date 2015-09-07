'use strict';

angular.module('navigation').directive('sideNav',
  function ($rootScope, $mdSidenav) {
    return {
      restrict: 'E',
      templateUrl: 'modules/navigation/views/side-nav.html',
      link: function (scope) {

        $rootScope.$on('SideNav:show', function () {
          $mdSidenav('left').toggle();
        });

        scope.closeSideNav = function () {
          $mdSidenav('left').close();
        };
      }
    };
  });
