'use strict';

angular.module('users')
  .config(function (UserAuthProvider) {

    UserAuthProvider.config({
      loginForm: {
        animate: true
      },
      backend: {
        paths: {
          login: 'auth/login',
          logout: 'auth/logout'
        }
      }
    });

  });
