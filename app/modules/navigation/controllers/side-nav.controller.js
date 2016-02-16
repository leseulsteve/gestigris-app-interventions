'use strict';

angular.module('navigation').controller('SideNavController',
  function (UserAuth, $state) {

    var ctrl = this;

    ctrl.showProfil = function () {
      $state.go('profil');
    };

    ctrl.showNotifications = function () {
      $state.go('notifications');
    };

    ctrl.logout = function () {
      UserAuth.signout().then(function () {
        $state.go('login');
      });
    };

  });
