'use strict';

angular.module('core').directive('avatar',
  function ($rootScope, User) {
    return {
      restrict: 'E',
      scope: {
        userId: '='
      },
      templateUrl: 'modules/users/views/avatar.html',
      link: function (scope) {
        User.findById(scope.userId || $rootScope.currentUser._id).then(function (user) {
          scope.user = user;
        });
      }
    };
  });
