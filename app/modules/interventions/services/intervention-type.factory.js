'use strict';

angular.module('conversations').factory('InterventionType',
  function (Schema) {

    var InterventionType = new Schema('interventiontype');

    InterventionType.prototype.toString = function () {
      return this.name;
    };

    return InterventionType;

  });
