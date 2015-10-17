'use strict';

angular.module('interventions').directive('userInterventionsList',
  function ($rootScope, ContextualCard, Intervention) {
    return {
      restrict: 'A',
      link: function (scope) {
        Intervention.getScheduledInterventions($rootScope.currentUser).then(function (interventions) {
          scope.contextualCard = new ContextualCard({
            icon: 'check',
            title: 'Interventions confirmés',
            list: Intervention.groupByDay(interventions),
            contentTemplateUrl: 'modules/interventions/views/interventions.list.html'
          });
        });
      }
    };
  });
