'use strict';

angular.module('core').directive('z1',
  function ($rootScope, $timeout, $window) {
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '<md-icon md-svg-icon="person" class="md-avatar"></md-icon>',
      templateUrl: 'modules/core/views/z1.html',
      // replace: true,
      // transclude: true,
      //compile: function (tElement) {
      //tElement.css('min-height', '250px');
      //},
      link: function (scope, element) {

        element.find('img').bind('load', function () {
          $timeout(function () {
            scope.showZ1 = true;
          });
        });

        var toolBar = element.find('md-toolbar');

        var heightRange = scope.$eval(toolBar.attr('elastic-toolbar'));

        toolBar.setHeight = function (newHeight) {
          if (newHeight >= heightRange[0] && newHeight <= heightRange[1]) {
            this.css('min-height', newHeight + 'px');
          }
        };

        toolBar.setHeight(heightRange[1]);

        $rootScope.$on('$stateChangeSuccess',
          function (event, toState) {
            if (toState.name === 'login') {
              angular.element($window).unbind('scroll');
              toolBar.css('min-height', '500px');
            } else {
              toolBar.css('min-height', '300px');
              angular.element($window).bind('scroll', function () {
                toolBar.setHeight(heightRange[1] - this.pageYOffset);
              });
            }
          });
      },
      controller: function ($scope, $element) {

        var logo = $element.find('img'),
          toolBar = $element.find('md-toolbar'),
          flexibleElements = $element.find('flexible');

        $rootScope.$on('$stateChangeStart',
          function (event, toState, toParam, fromState) {
            if (toState.name === 'login' && fromState.name !== '') {
              toolBar.removeClass('fixed');
              toolBar.addClass('transition-min-height');
            }
          });

        $rootScope.$on('$stateChangeSuccess',
          function (event, toState) {
            if (toState.name === 'login') {

              $element.addClass('login');

              $scope.isLogin = true;

              flexibleElements.removeClass('remove-flex');

              $timeout(function () {
                toolBar.addClass('transition-min-height');
                logo.addClass('transition-margin-top');
              });

            } else {
              $element.removeClass('login');
              flexibleElements.addClass('remove-flex');

              $timeout(function () {
                toolBar.addClass('fixed');
                toolBar.removeClass('transition-min-height');
                $scope.isLogin = false;
              }, 1800);
            }
          });
      }
    };
  });
