'use strict';

angular.module('users')
  .config(function ($stateProvider) {

    $stateProvider
    /*.state('login', {
      url: '/login',
      templateUrl: 'modules/users/views/login.form.html'
    })*/

      .state('reset_password', {
      url: '/reset_password/:token',
      templateUrl: 'modules/users/views/reset-password.form.html',
      controller: function (UserAuth) {
        UserAuth.changePassword('123456');
      }
    });
  });
