'use strict';

angular.module('navigation').directive('test',
  function ($animate) {
    return {
      restrict: 'A',
      link: function (scope, element) {

        scope.click = function () {
          $animate.addClass(element, 'animated slideOutLeft').then(function () {
            element.removeClass('animated slideOutLeft');
            $animate.addClass(element, 'animated slideInLeft');
          });
          //scope.hide = true;
        };
      }
    };
  });
