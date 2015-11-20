'use strict';

angular.module('interventions').controller('InterventionFicheController',
  function ($scope, PlageIntervention, $stateParams, $timeout) {

    var ctrl = this;
    $scope.interventionFicheCtrl = ctrl;

    PlageIntervention.findById($stateParams.plageInterventionId).then(function (plageIntervention) {
      $timeout(function () {

        ctrl.plageIntervention = plageIntervention;

      }, 1000);
    });

  });
