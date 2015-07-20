'use strict';

angular.module('core')
  .config(function ($stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/core/views/home.html'
      });
  });
