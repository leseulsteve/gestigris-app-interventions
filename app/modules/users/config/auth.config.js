'use strict';

angular.module('users')
  .config(function (UserAuthProvider) {

    UserAuthProvider.config({
      signinForm: {
        animate: true
      },
      sendPasswordToken: {
        urlRedirection: 'http://localhost:9001/#!/reset_password',
      },
      confirmEmail: {
        urlRedirection: 'http://localhost:9001/#!/confirm_email',
      },
      apiRoot: 'http://localhost:9000/api/v1'
    });
  });
