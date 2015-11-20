'use strict';

angular.module('interventions').directive('interventionParticipants',
  function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/interventions/views/intervention.participants.html',
      link: function (scope) {
        scope.participantsIds = scope.intervention.getConfirmed();
      }
    };
  });
