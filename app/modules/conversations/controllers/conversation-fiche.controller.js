'use strict';

angular.module('conversations').controller('ConversationFicheController',
  function ($scope, Conversation, $stateParams, $timeout) {
    var ctrl = this;
    $scope.conversationFicheCtrl = ctrl;

    Conversation.findById($stateParams.conversationId).then(function (conversation) {
      $timeout(function () {

        ctrl.conversation = conversation;

      }, 1000);
    });

  });
