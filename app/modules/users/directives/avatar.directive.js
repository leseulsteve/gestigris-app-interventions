'use strict';

angular.module('users').directive('avatar',
  function () {
    return {
      restrict: 'E',
      scope: {
        user: '='
      },
      templateUrl: 'modules/users/views/avatar.html'
    };
  });
