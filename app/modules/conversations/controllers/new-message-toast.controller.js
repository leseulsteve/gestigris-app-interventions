'use strict';

angular.module('conversations').controller('NewMessageToastController',
  function () {

    this.viewMessage = function (message) {
      console.log(message);
    };

  });
