'use strict';

angular.module('navigation').directive('sideBarHeader',
  function(Navigation, $http) {
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      templateUrl: 'modules/navigation/views/material/side-bar-header.material.html',
      // replace: true,
      // transclude: true,
      compile: function(tElement, tAttrs) {
        $http.get(Navigation.get('sideNav', 'headerTemplateUrl')).then(function(response) {
          angular.element(tElement.children()[0]).append(response.data);
        });
      },
      //link: function($scope, iElm, iAttrs, controller) {}
    };
  });