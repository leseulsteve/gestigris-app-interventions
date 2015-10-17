'use strict';

angular.module('core').factory('EtablissementType',
  function (Schema) {

    var EtablissementType = new Schema('etablissementtype');

    EtablissementType.prototype.toString = function () {
      return this.name;
    };

    return EtablissementType;

  });
