'use strict';

angular.module('users').controller('NotificationsController',
  function (UserAuth, NotificationConfig) {

    var ctrl = this;

    NotificationConfig.get().then(function (config) {
      ctrl.config = config;
    });

    ctrl.saveConfig = function () {
      ctrl.config.save().then(function (savedConfig) {
        _.assign(ctrl.config, savedConfig);
      });
    };

  });
