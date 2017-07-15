'use strict';

angular.module('navigation').directive('sideNav',
  function ($rootScope, $mdSidenav, APP) {
    return {
      restrict: 'E',
      templateUrl: 'modules/navigation/views/side-nav.html',
      controller: 'SideNavController',
      controllerAs: 'sideNavCtrl',
      link: function (scope) {

        scope.appName = APP.name;

        $rootScope.$on('SideNav:show', function () {
          $mdSidenav('side-nav').toggle();
        });

        scope.closeSideNav = function () {
          $mdSidenav('side-nav').close();
        };
      }
    };
  });
