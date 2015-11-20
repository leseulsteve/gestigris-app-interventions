'use strict';

angular.module('interventions').directive('interventionListItem',
  function () {
    return {
      restrict: 'E',
      scope: {
        intervention: '='
      },
      templateUrl: 'modules/interventions/views/_intervention.list-item.html'
    };
  });
