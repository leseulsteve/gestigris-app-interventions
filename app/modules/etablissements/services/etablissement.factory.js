'use strict';

angular.module('etablissements').factory('Etablissement',
  function () {

    var Etablissement = function (params) {
      _.assign(this, params);
    };

    Etablissement.prototype.toString = function () {
      return this.name;
    };

    return Etablissement;

  });
