'use strict';

angular.module('core').factory('Province',
  function (Schema) {

    var Province = new Schema('province');

    Province.prototype.toString = function () {
      return this.name;
    };

    return Province;

  });
