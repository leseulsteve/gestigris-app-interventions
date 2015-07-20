'use strict';

angular.module('etablissements').directive('etablissementCard',
  function () {
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      templateUrl: 'modules/etablissements/views/etablissement-interventions.card.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs) {},
      link: function (scope, element) {

        var imageElement = element.find('img'),
          wrapperElement = imageElement.parent();

        wrapperElement.css('max-height', '188px');
        wrapperElement.css('overflow', 'hidden');

        imageElement.bind('load', function () {
          var wrapperHeight = wrapperElement.prop('clientHeight');

          var imageHeight = imageElement.prop('height');

          var overlap = (wrapperHeight - imageHeight) / 2;
          imageElement.css('margin-top', overlap + 'px');
          imageElement.css('margin-bottom', overlap + 'px');

        });
      }
    };
  });
