'use strict';

angular.module('core').factory('Arrondissement',
  function (Schema) {

    var Arrondissement = new Schema('adresse/arrondissement');

    Arrondissement.prototype.toString = function () {
      return this.name;
    };

    return Arrondissement;

  });
