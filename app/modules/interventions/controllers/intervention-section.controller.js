'use strict';

angular.module('interventions').controller('InterventionSectionController',
  function ($rootScope, $q, EtablissementType, Arrondissement) {

    var ctrl = this;

    $rootScope.$watch('plagesInterventions', function (plages) {
      if (plages) {

        ctrl.plages = plages.all;

        var promises = [];

        promises.push(EtablissementType.find({
          _id: {
            $in: _.uniq(_.map(plages.all, function (plage) {
              return plage.etablissement.type;
            }))
          }
        }).then(function (etablissementTypes) {

          etablissementTypes.unshift(_.assign(new EtablissementType(), {
            _id: 0,
            name: 'Tous'
          }));

          ctrl.etablissementTypes = etablissementTypes;
          ctrl.selectedEtablissementType = ctrl.etablissementTypes[0];
        }));

        promises.push(Arrondissement.find({
          _id: {
            $in: _.uniq(_.map(plages.all, function (plage) {
              return plage.etablissement.address.arrondissement;
            }))
          }
        }).then(function (arrondissements) {

          arrondissements.unshift(_.assign(new Arrondissement(), {
            _id: 0,
            name: 'Tous'
          }));

          ctrl.arrondissements = arrondissements;
          ctrl.selectedArrondissement = ctrl.arrondissements[0];
        }));

        $q.all(promises).then(function () {

          ctrl.filterPlages = function () {
            ctrl.plages = ctrl.selectedEtablissementType._id === 0 ? plages.all : _.filter(plages.all, function (plage) {
              return plage.etablissement.type === ctrl.selectedEtablissementType._id;
            });
            ctrl.plages = ctrl.selectedArrondissement._id === 0 ? ctrl.plages : _.filter(ctrl.plages, function (plage) {
              return plage.etablissement.address.arrondissement === ctrl.selectedArrondissement._id;
            });
          };
        });
      }
    });
  });
