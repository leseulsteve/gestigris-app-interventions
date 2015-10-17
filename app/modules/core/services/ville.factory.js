'use strict';

angular.module('core').factory('Ville',
  function (Schema) {

    var Ville = new Schema('ville');

    Ville.prototype.toString = function () {
      return this.name;
    };

    return Ville;

  });
