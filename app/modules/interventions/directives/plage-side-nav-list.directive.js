'use strict';

angular.module('interventions').directive('plageSideNavList',
  function ($rootScope, $q) {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        type: '@',
        chuckSize: '@'
      },
      templateUrl: 'modules/interventions/views/plage-side-nav.list.html',
      link: function (scope, element) {

        element.addClass('nav-list');

        var toWatch = scope.type === 'waiting' ? 'plagesInterventions.waiting' : 'plagesInterventions.confirmed';

        function parsePlage(plage) {

          var promises = [];

          promises.push(plage.getInterventions().then(function (interventions) {
            var filteredInterventions = _.filter(interventions, function (intervention) {
              return intervention.state.toLowerCase() === scope.type;
            });

            plage.filteredInterventions = _.map(filteredInterventions, function (intervention) {
              return intervention.date.start;
            });

            return plage;
          }));

          return $q.all(promises);
        }

        function setPlages(plages) {
          scope.showPlus = plages.length > scope.chuckSize;
          scope.plages = _.slice(plages, 0, scope.chuckSize);
        }

        var parsedPlages;

        var firstWatch = true;
        $rootScope.$watchCollection(toWatch, function (plages, oldPlages) {
          if (plages) {

            if (firstWatch) {
              firstWatch = false;
              var promises = [];
              _.forEach(plages, function (plage) {
                promises.push(parsePlage(plage));
              });
              $q.all(promises).then(function (plages) {
                parsedPlages = _.flatten(plages);
                setPlages(parsedPlages);
              });
            } else {

              var removedPlages = _.difference(oldPlages, plages);

              _.remove(parsedPlages, function (plage) {
                return _.contains(_.pluck(removedPlages, '_id'), plage._id);
              });

              var addedPlagesPromises = [];

              var addedPlages = _.difference(plages, oldPlages);

              _.forEach(addedPlages, function (plage) {
                addedPlagesPromises.push(parsePlage(plage));
              });

              $q.all(addedPlagesPromises).then(function (plages) {
                parsedPlages = parsedPlages.concat(_.flatten(plages));
                setPlages(parsedPlages);
              });
            }
          }
        });
      }
    };
  });
