'use strict';

angular.module('conversations').config(
  function ($stateProvider) {

    $stateProvider.

    state('conversations', {
      url: '/conversations',
      templateUrl: 'modules/conversations/views/conversations.section.html',
      controller: 'ConversationsSectionController'
    }).

    state('conversation', {
      url: '/conversations/:conversationId',
      templateUrl: 'modules/conversations/views/conversation.section.html',
      controller: 'ConversationFicheController'
    });
  });
