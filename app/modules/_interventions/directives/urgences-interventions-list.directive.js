'use strict';

angular.module('interventions').directive('urgencesInterventionsList',
  function ($rootScope, ContextualCard, Intervention) {
    return {
      restrict: 'A',
      link: function (scope) {
        Intervention.getUrgentInterventions($rootScope.currentUser).then(function (interventions) {
          scope.contextualCard = new ContextualCard({
            icon: 'warning',
            title: 'Urgences',
            list: Intervention.groupByDay(interventions),
            contentTemplateUrl: 'modules/interventions/views/interventions.list.html'
          });
        });
      }
    };
  });
