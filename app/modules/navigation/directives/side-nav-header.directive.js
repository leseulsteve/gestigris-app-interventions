'use strict';

angular.module('navigation').directive('sideNavHeader',
  function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/navigation/views/header.side-nav.html'
    };
  });
