'use strict';

angular.module('interventions').directive('interventionConversation',
  function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/interventions/views/intervention.conversation.html'
    };
  });
