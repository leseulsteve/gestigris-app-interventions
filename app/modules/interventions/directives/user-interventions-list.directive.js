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
            list: interventions,
            itemTemplate: '{{ item.etablissement.toString() }} {{ item.date.start | date: \'H:mm\' }} - {{ item.date.end | date: \'H:mm\' }}'
          });
        });
      }
    };
  });
