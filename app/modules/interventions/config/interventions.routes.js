'use strict';

angular.module('interventions')
  .config(function ($stateProvider) {

    $stateProvider.

    state('interventions', {
      url: '/interventions',
      templateUrl: 'modules/interventions/views/interventions.section.html',
      controller: 'InterventionSectionController'
    }).

    state('intervention', {
      url: '/interventions/:plageInterventionId',
      templateUrl: 'modules/interventions/views/plage-intervention.section.html',
      controller: 'InterventionFicheController'
    });
  });
