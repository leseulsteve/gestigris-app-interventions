'use strict';

angular.module('cards').directive('contextualCard',
  function () {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'modules/cards/views/contextual.card.html'
    };
  });
