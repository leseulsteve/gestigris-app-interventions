'use strict';

angular.module('core').run(
  function ($rootScope, PlageIntervention, Conversation, $timeout) {

    PlageIntervention.findProchaines().then(function (plagesInterventions) {
      $timeout(function () {

        $rootScope.plagesInterventions = {
          open: _.filter(plagesInterventions, function (plage) {
            return plage.hasOpen();
          }),
          waiting: _.filter(plagesInterventions, function (plage) {
            return plage.hasWaiting();
          }),
          confirmed: _.filter(plagesInterventions, function (plage) {
            return plage.hasConfirmed();
          }),
        };

      }, 1000);

    });

    Conversation.getFromTeam().then(function (conversations) {
      $rootScope.conversations = {
        equipe: conversations
      };
    });

    $rootScope.$on('$stateChangeSuccess', function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  });
