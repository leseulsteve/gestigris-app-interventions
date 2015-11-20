'use strict';

angular.module('interventions').directive('interventionInfos',
  function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/interventions/views/intervention.infos.html'
    };
  });
