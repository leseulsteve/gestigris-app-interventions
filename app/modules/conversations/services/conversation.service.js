'use strict';

angular.module('conversations').factory('ConversationService',
  function ($rootScope, Conversation) {
    return {

      init: function () {
        return Conversation.getFromTeam().then(function (conversations) {
          $rootScope.conversations = {
            equipe: conversations
          };
        });
      }

    };
  });
