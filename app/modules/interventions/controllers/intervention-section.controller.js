'use strict';

angular.module('interventions').controller('InterventionSectionController',
  function ($rootScope, $q, EtablissementType, CommissionScolaire) {

    var ctrl = this;

    $rootScope.$watch('plagesInterventions', function (plages) {
      if (plages) {

        ctrl.plages = plages.all;

        var promises = [];

        promises.push(EtablissementType.find({
          _id: {
            $in: _(plages.all)
              .map(function (plage) {
                return plage.etablissement.type;
              })
              .uniq()
              .value()
          }
        }).then(function (etablissementTypes) {

          etablissementTypes.unshift(_.assign(new EtablissementType(), {
            _id: 0,
            name: 'Tous'
          }));

          ctrl.etablissementTypes = etablissementTypes;
          ctrl.selectedEtablissementType = _.first(ctrl.etablissementTypes);
        }));

        promises.push(CommissionScolaire.find({
          _id: {
            $in: _(plages.all)
              .map(function (plage) {
                return plage.etablissement.commissionScolaire;
              })
              .uniq()
              .value()
          }
        }).then(function (comissionScolaires) {

          comissionScolaires.unshift(_.assign(new CommissionScolaire(), {
            _id: 0,
            name: 'Tous'
          }));

          ctrl.comissionScolaires = comissionScolaires;
          ctrl.selectedComissionScolaire = _.first(ctrl.comissionScolaires);
        }));

        $q.all(promises).then(function () {

          ctrl.filterPlages = function () {

            ctrl.plages = _(plages.all)
              .filter(function (plage) {
                return ctrl.selectedComissionScolaire._id === 0 || plage.etablissement.commissionScolaire === ctrl.selectedComissionScolaire._id;
              })
              .filter(function (plage) {
                return ctrl.selectedEtablissementType._id === 0 || plage.etablissement.type === ctrl.selectedEtablissementType._id;
              })
              .value();
          };
        });
      }
    });
  });
