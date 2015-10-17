'use strict';

angular.module('core').service('Toast',
  function ($mdMedia, $mdToast) {

    var Toast = function (text) {
      this.template = '<md-toast>' + text + '</md-toast>';
      this.position = $mdMedia('sm') ? 'bottom fit' : 'bottom left';
    };

    Toast.prototype.show = function () {
      $mdToast.show(this);
    };

    return Toast;

  });
