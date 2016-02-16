'use strict';

angular.module('users').controller('ProfilController',
  function ($scope, UserAuth) {

    var ctrl = this;

    ctrl.user = UserAuth.getCurrentUser();
    ctrl.user.dateNaissance = new Date(ctrl.user.dateNaissance);

    ctrl.saveProfile = function (form) {

      if (form.$valid) {
        ctrl.user.save().then(function (savedUser) {
          _.assign(ctrl.user, savedUser);
          form.$setPristine();
        });
      }
    };

  });
