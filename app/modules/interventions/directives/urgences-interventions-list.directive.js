'use strict';

angular.module('interventions').directive('urgencesInterventionsList',
  function ($rootScope, ContextualCard, Intervention) {
    return {
      restrict: 'A',
      link: function (scope) {
        Intervention.getScheduledInterventions($rootScope.currentUser).then(function (interventions) {
          scope.contextualCard = new ContextualCard({
            icon: 'warning',
            title: 'Urgences',
            list: interventions,
            itemTemplate: '{{ item.etablissement.toString() }} {{ item.date.start | date: \'H:mm\' }} - {{ item.date.end | date: \'H:mm\' }}'
          });
        });
      }
    };
  });
