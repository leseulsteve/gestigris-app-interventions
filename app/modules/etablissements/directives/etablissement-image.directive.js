'use strict';

angular.module('etablissements').directive('etablissementImage',
  function () {
    return {
      restrict: 'E',
      scope: {
        etablissement: '=',
      },
      templateUrl: 'modules/etablissements/views/etablissement.image.html'
    };
  });
