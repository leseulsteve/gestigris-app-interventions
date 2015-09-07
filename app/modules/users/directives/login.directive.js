'use strict';

angular.module('users').directive('login',
  function ($animate, $timeout, UserAuth, $rootScope, $state) {
    return {
      restrict: 'E',
      templateUrl: 'modules/users/views/login.form.html',
      link: function (scope, element) {

        scope.resetPassword = function () {
          UserAuth.sendPasswordToken('admin@gmail.com');
        };

        scope.lockIconName = 'lock_outline';

        var loginForm = element.find('md-content');

        scope.credentials = {
          username: 'admin@gmail.com',
          password: 'password'
        };

        $rootScope.$on('UserAuth:signin:success', function () {
          var lock = angular.element(element[0].getElementsByClassName('login-icon'));

          $animate.addClass(lock, 'bounce').then(function () {
            $animate.removeClass(lock, 'bounce');
            scope.lockIconName = 'lock_open';

            $timeout(function () {

              $animate.addClass(loginForm, 'slideOutDown');

              $timeout(function () {
                element.css('visibility', 'hidden');
              }, 1000);
              $state.go('interventions');
            }, 500);
          });
        });
      },
    };
  });
