'use strict';

angular.module('etablissements').factory('Etablissement',
  function (Schema, $q) {

    var Etablissement = new Schema('etablissement');

    Etablissement.prototype.toString = function () {
      return this.name;
    };

    Etablissement.findById = function (id) {
      id = id;
      var deffered = $q.defer();
      deffered.resolve({
        name: 'École secondaire de Neufchâtel',
        toString: function () {
          return 'École secondaire de Neufchâtel';
        }
      });
      return deffered.promise;
    };

    return Etablissement;

  });
