'use strict';

angular.module('navigation')
  .provider('Navigation', function () {

    var config = {};

    return {

      set: function (item, value) {
        if (_.isUndefined(config[item])) {
          config[item] = {};
        }
        _.merge(config[item], value);
      },

      $get: function () {

        return {

          get: function (item, value) {
            return config[item][value];
          }
        };
      }
    };
  });
