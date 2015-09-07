'use strict';

angular.module('core').directive('mainContent',
  function () {
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '<md-icon md-svg-icon="person" class="md-avatar"></md-icon>',
      templateUrl: 'modules/core/views/main-content.html',
      replace: true,
      // transclude: true,
      //compile: function (tElement) {
      //tElement.css('min-height', '250px');
      //},
      /*link: function (scope, element) {
        element.find('img').bind('load', function () {
          scope.showZ1 = true;
        });
      },*/
      /*controller: function ($scope, $element) {

        var logo = $element.find('img');

        $rootScope.$on('$stateChangeSuccess',
          function (event, toState) {
            if (toState.name === 'login') {
              $scope.showIcons = false;
              $scope.isLogin = true;
              logo.css('height', '300%');
              logo.css('margin-top', '15%');
              $element.css('min-height', '60%');
              $element.css('width', '83%');
              $element.css('margin', '8% 8% 0 8%');
            } else {
              $scope.isLogin = false;
              logo.css('height', '100%');
              logo.css('margin-top', '1%');
              $element.removeAttr('style');
              $element.css('min-height', '250px');

              $timeout(function () {
                $scope.showIcons = true;
              }, 2000);
            }
          });
      }*/
    };
  });
