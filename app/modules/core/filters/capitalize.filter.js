'use strict';

angular.module('core').filter('capitalize',
  function () {
    return function (input) {
      return _.capitalize(input);
    };
  });
