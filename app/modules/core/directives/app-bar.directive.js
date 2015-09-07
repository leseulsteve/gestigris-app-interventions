'use strict';

angular.module('core').directive('appBar',
  function ($rootScope) {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/app-bar.html',
      link: function (scope) {
        scope.openSideNav = function () {
          $rootScope.$broadcast('SideNav:show');
        };
      }
    };
  });
