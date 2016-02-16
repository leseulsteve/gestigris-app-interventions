'use strict';

angular.module('interventions').factory('InterventionService',
  function ($rootScope, PlageIntervention) {

    function handlePlage(plage) {
      if (plage.hasOpen()) {
        $rootScope.plagesInterventions.open.push(plage);
      }
      if (plage.hasWaiting()) {
        $rootScope.plagesInterventions.waiting.push(plage);
      }
      if (plage.hasConfirmed()) {
        $rootScope.plagesInterventions.confirmed.push(plage);
      }
    }

    function contains(groupName, plage) {
      return _.filter($rootScope.plagesInterventions[groupName], function (item) {
        return item._id === plage._id;
      }).length > 0;
    }

    function removeFrom(groupName, plage) {
      _.remove($rootScope.plagesInterventions[groupName], function (item) {
        return item._id === plage._id;
      });
    }

    return {

      init: function () {
        return PlageIntervention.findProchaines().then(function (plagesInterventions) {

          $rootScope.plagesInterventions = {
            all: plagesInterventions,
            open: [],
            waiting: [],
            confirmed: [],
          };

          _.forEach(plagesInterventions, function (plage) {
            handlePlage(plage);

            plage.on('stateChange', function (updatedPlage) {

              if (contains('open', updatedPlage) && !updatedPlage.hasOpen()) {
                removeFrom('open', updatedPlage);
              }

              if (contains('waiting', updatedPlage) && !updatedPlage.hasWaiting()) {
                removeFrom('waiting', updatedPlage);
              }

              if (contains('confirmed', updatedPlage) && !updatedPlage.hasConfirmed()) {
                removeFrom('confirmed', updatedPlage);
              }

              handlePlage(updatedPlage);

            });

          });

        });
      }

    };
  });
