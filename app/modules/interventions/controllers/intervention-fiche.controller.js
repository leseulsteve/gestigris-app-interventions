'use strict';

angular.module('interventions').controller('InterventionFicheController',
  function ($rootScope, $scope, $timeout, Etablissement, $stateParams) {

    var ctrl = this;

    $rootScope.$watch('plagesInterventions', function (plages) {
      if (plages) {

        var plageIntervention = _.find(plages.all, '_id', $stateParams.plageInterventionId);

        plageIntervention.getInterventions().then(function (interventions) {
          ctrl.interventions = interventions;
        });

        Etablissement.findById(plageIntervention.etablissement._id).then(function (etablissement) {
          ctrl.etablissement = etablissement;
        });

        ctrl.plageIntervention = plageIntervention;
      }
    });

    $scope.$on('imageLoaded', function () {
      $scope.showCard = true;
      $timeout(function () {
        $scope.showMap = true;
      });
    });

  });
