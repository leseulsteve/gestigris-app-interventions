'use strict';

angular.module('core')
  .config(function ($stateProvider) {

    $stateProvider
      .state('interventions', {
        title: 'Interventions',
        url: '/interventions',
        template: '<intervention-section></intervention-section>',
        nav: {
          sideNav: {
            title: 'Interventions',
            icon: 'forum'
          }
        }
      });
  });
