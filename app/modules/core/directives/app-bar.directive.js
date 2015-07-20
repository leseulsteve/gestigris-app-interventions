'use strict';

angular.module('core').directive('appBar',
  function () {
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '<md-icon md-svg-icon="person" class="md-avatar"></md-icon>',
      templateUrl: 'modules/core/views/app-bar.html',
      // replace: true,
      // transclude: true,
      //compile: function (tElement) {
      //tElement.css('min-height', '250px');
      //},
      link: function (scope, element) {
        element.addClass('login');
      },
      //*controller: function ($scope, $element) {};
    };
  });
