'use strict';

angular.module('interventions')
  .config(function ($stateProvider) {

    $stateProvider.

    state('home', {
      url: '/interventions',
      templateUrl: 'modules/interventions/views/plage-intervention.section.html',
      controller: 'InterventionSectionController',
      controllerAs: 'interventionSectionCtrl'
    }).

    state('intervention', {
      url: '/interventions/:plageInterventionId',
      templateUrl: 'modules/interventions/views/plage-intervention.fiche.html',
      controller: 'InterventionFicheController',
      controllerAs: 'interventionFicheCtrl'
    });
  });
