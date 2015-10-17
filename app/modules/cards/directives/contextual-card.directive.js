'use strict';

angular.module('cards').directive('contextualCard',
  function () {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'modules/cards/views/contextual.card.html',
      link: function (scope) {

        scope.$watch('contextualCard', function (contextualCard) {
          if (contextualCard) {
            scope.hasItems = _.isArray(contextualCard.list) ? contextualCard.list.length > 0 : scope.hasItems = _.keys(contextualCard.list).length > 0;
            scope.contextualList = contextualCard.list;
          }
        });
      }
    };
  });
