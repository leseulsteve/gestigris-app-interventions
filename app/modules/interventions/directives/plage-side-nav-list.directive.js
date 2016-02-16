'use strict';

angular.module('interventions').directive('plageSideNavList',
  function ($rootScope, $q) {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        type: '@',
        chunkSize: '@'
      },
      templateUrl: 'modules/interventions/views/plage-side-nav.list.html',
      link: function (scope, element) {

        element.addClass('nav-list');

        var toWatch = scope.type === 'waiting' ? 'plagesInterventions.waiting' : 'plagesInterventions.confirmed';

        function parsePlage(plage) {

          var promises = [];

          promises.push(plage.getInterventions().then(function (interventions) {
            plage.filteredInterventions = _.map(interventions, function (intervention) {
              return {
                date: intervention.date.start,
                type: intervention.state.toLowerCase()
              };
            });

            return plage;
          }));

          return $q.all(promises);
        }

        scope.showMore = function () {
          scope.chunkSize += scope.chunkSize;
        };

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
                scope.plages = _.flatten(_.sortBy(plages, 'date'));
              });
            } else {

              var removedPlages = _.difference(oldPlages, plages);

              _.remove(scope.plages, function (plage) {
                return _.contains(_.pluck(removedPlages, '_id'), plage._id);
              });

              var addedPlagesPromises = [];

              _.forEach(_.difference(plages, oldPlages), function (plage) {
                addedPlagesPromises.push(parsePlage(plage));
              });

              _.forEach(scope.plages, function (plage) {
                parsePlage(plage);
              });

              $q.all(addedPlagesPromises).then(function (plages) {

                _.forEach(_.flatten(plages), function (plage) {
                  scope.plages.splice(_.sortedIndex(scope.plages, plage, function (item) {
                    return item.date;
                  }), 0, plage);
                });
              });
            }
          }
        });
      }
    };
  });
