'use strict';

angular.module('users').directive('login',
  function ($animate, $timeout, UserAuth) {
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      templateUrl: 'modules/users/views/login.form.html',
      // replace: true,
      // transclude: true,
      // compile: function (tElement) {},  
      link: function (scope, element) {

        scope.resetPassword = function () {
          UserAuth.resetPassword('admin@gmail.com');
        };

        scope.lockIconName = 'lock_outline';

        var loginForm = element.find('md-content');

        scope.secureLogin = function () {
          var lock = angular.element(element[0].getElementsByClassName('login-icon'));

          $animate.addClass(lock, 'bounce').then(function () {
            $animate.removeClass(lock, 'bounce');
            scope.lockIconName = 'lock_open';

            $timeout(function () {

              $animate.addClass(loginForm, 'slideOutDown');

              $timeout(function () {
                element.css('visibility', 'hidden');
              }, 1000);
              // $state.go('interventions');
            }, 500);
          });
        };
      },
      // controller: function ($scope, $element) {};
    };
  });
