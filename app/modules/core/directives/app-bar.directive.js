'use strict';

angular.module('core').directive('appBar',
  function ($rootScope, $mdMedia) {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/app-bar.html',
      link: function (scope) {
        scope.$mdMedia = $mdMedia;

        scope.openSideNav = function () {
          $rootScope.$broadcast('SideNav:show');
        };
      }
    };
  });
