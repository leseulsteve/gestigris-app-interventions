'use strict';

angular.module('core').directive('avatar',
  function () {
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      template: '<md-icon md-svg-icon="account_circle" class="md-avatar"></md-icon>',
      // templateUrl: '',
      // replace: true,
      // transclude: true,
      //compile: function(tElement, tAttrs) {},
      // link: function($scope, iElm, iAttrs, controller) {console.log(232)}
    };
  });
