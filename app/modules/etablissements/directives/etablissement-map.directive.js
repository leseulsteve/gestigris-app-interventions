'use strict';

angular.module('etablissements').directive('etablissementMap',
  function ($timeout, leafletData) {
    return {
      restrict: 'E',
      scope: {
        etablissement: '='
      },
      templateUrl: 'modules/etablissements/views/etablissement.map.html',
      link: function (scope) {

        var unwatch = scope.$watch('etablissement', function (etablissement) {
          if (etablissement) {
            angular.extend(scope, {
              center: {
                lat: etablissement.coordinates.lat,
                lng: etablissement.coordinates.long,
                zoom: 15
              }
            });
            leafletData.getMap().then(function (map) {
              $timeout(function () {
                scope.markers = {
                  etablissement: {
                    lat: etablissement.coordinates.lat,
                    lng: etablissement.coordinates.long,
                    message: etablissement.address.street,
                    focus: true,
                    draggable: false
                  }
                };
                map.invalidateSize();
              });
            });
            unwatch();
          }
        });
      }
    };
  });
