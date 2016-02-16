'use strict';

angular.module('users')
  .config(function ($stateProvider) {

    $stateProvider.

    state('login', {
      url: '/connexion',
      templateUrl: 'modules/users/views/login.form.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    }).

    state('profil', {
      url: '/profil',
      templateUrl: 'modules/users/views/profil.html',
      controller: 'ProfilController',
      controllerAs: 'profilCtrl'
    }).

    state('notifications', {
      url: '/notifications',
      templateUrl: 'modules/users/views/notifications.html',
      controller: 'NotificationsController',
      controllerAs: 'notificationsCtrl'
    }).

    state('reset_password', {
      url: '/reset_password/:token',
      templateUrl: 'modules/users/views/reset-password.form.html',
      controller: function (UserAuth) {
        UserAuth.changePassword('123456');
      }
    }).

    state('signup', {
      url: '/signup',
      //templateUrl: 'modules/users/views/reset-password.form.html',
      controller: function (UserAuth) {
        UserAuth.signup({
          username: 'username',
          password: 'password',
          roles: ['admin'],
          email: 'email@exemple.com',
          department: 'department'
        });
      }
    }).

    state('confirm_email', {
      url: '/confirm_email/:token',
      //templateUrl: 'modules/users/views/reset-password.form.html',
      controller: function (UserAuth) {
        UserAuth.confirmEmail();
      }
    });
  });
