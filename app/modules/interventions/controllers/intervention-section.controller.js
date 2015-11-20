'use strict';

angular.module('interventions').controller('InterventionSectionController',
  function ($scope) {

    var ctrl = this;
    $scope.interventionSectionCtrl = ctrl;

    ctrl.filters = ['suggestions'];
    ctrl.selectedFilter = ctrl.filters[0];

  });
