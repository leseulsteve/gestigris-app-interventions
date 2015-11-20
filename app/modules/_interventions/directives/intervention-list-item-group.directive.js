'use strict';

angular.module('interventions').directive('interventionListItemGroup',
  function (Moment) {
    return {
      restrict: 'E',
      scope: {
        date: '=',
        interventions: '='
      },
      templateUrl: 'modules/interventions/views/interventions.list-group.html',
      link: function (scope) {
        scope.date = new Moment(new Date(scope.date));
      }
    };
  });
