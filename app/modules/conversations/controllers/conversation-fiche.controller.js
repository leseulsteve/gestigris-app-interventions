'use strict';

angular.module('conversations').controller('ConversationFicheController',
  function (Conversation, $stateParams) {

    var ctrl = this;

    Conversation.findById($stateParams.conversationId).then(function (conversation) {
      ctrl.conversation = conversation;
    });

  });
