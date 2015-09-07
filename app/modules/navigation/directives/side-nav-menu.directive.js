'use strict';

angular.module('navigation').directive('sideNavMenu',
  function (Navigation) {
    return {
      restrict: 'E',
      templateUrl: 'modules/navigation/views/menu.side-nav.html',
      link: function ($scope) {
        $scope.sideBarMenuItems = Navigation.get('sideNav');
      }
    };
  });
