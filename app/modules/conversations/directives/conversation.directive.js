'use strict';

angular.module('conversations').directive('conversation',
  function (Conversation, Message, $rootScope) {
    return {
      restrict: 'E',
      scope: {
        id: '='
      },
      templateUrl: 'modules/conversations/views/conversation.html',
      link: function (scope) {

        Conversation.findById(scope.id).then(function (conversation) {
          scope.conversation = conversation;
        });

        scope.addMessage = function (newMessage) {
          Message.create(_.assign({
            author: $rootScope.currentUser._id,
            conversationId: scope.conversation._id
          }, newMessage)).then(function (newMessage) {
            newMessage = {};
            scope.conversation.messages.push(newMessage);
          });
        };
      }
    };
  });
