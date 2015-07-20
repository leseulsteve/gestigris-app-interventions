'use strict';

angular.module('users')
  .config(function ($stateProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'modules/users/views/login.form.html'
      });
  });
