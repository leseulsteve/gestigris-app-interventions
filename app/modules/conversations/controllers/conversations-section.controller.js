'use strict';

angular.module('conversations').controller('ConversationsSectionController',
  function ($scope, Conversation) {

    var ctrl = this;
    $scope.conversationsSectionCtrl = ctrl;

    Conversation.getGeneral().then(function (conversations) {
      ctrl.conversations = conversations;
    });

    ctrl.filters = ['suggestions'];
    ctrl.selectedFilter = ctrl.filters[0];

  });
