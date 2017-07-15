'use strict';

angular.module('interventions').controller('InterventionFicheController',
  function ($rootScope, $scope, $timeout, Etablissement, $stateParams, $state) {

    var ctrl = this;

    ctrl.close = function () {
      $state.go('home');
    };

    $rootScope.$watch('plagesInterventions', function (plages) {
      if (plages) {

        var plageIntervention = _.find(plages.all, ['_id', $stateParams.plageInterventionId]);

        plageIntervention.getInterventions().then(function (interventions) {
          console.log(interventions);
          ctrl.interventions = interventions;
        });

        Etablissement.findById(plageIntervention.etablissement._id).then(function (etablissement) {
          ctrl.etablissement = etablissement;
        });

        ctrl.plageIntervention = plageIntervention;
      }
    });

  });
