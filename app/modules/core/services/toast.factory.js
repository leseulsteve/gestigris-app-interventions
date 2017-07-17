'use strict';

angular.module('core').service('Toast',
  function ($mdMedia, $mdToast) {

    return {

      show: function (message) {
        $mdToast.show(
          $mdToast.simple()
          .textContent(message)
          .position($mdMedia('sm') ? 'bottom fit' : 'bottom right')
          .hideDelay(3000)
        );
      }
    };

  });
