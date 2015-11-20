'use strict';

angular.module('conversations').directive('conversation',
  function ($rootScope, Message) {
    return {
      restrict: 'E',
      scope: {
        conversation: '='
      },
      templateUrl: 'modules/conversations/views/conversation.html',
      link: function (scope) {
        scope.addMessage = function (newMessage) {
          newMessage = new Message(_.assign({
            conversationId: scope.conversation._id,
            author: $rootScope.currentUser._id
          }, newMessage));

          newMessage.save().then(function (message) {
            scope.conversation.messages.push(message);
          });
        };

        scope.deleteMessage = function (message) {
          message.save();
          /*message.remove().then(function () {
            _.pull(scope.conversation.messages, message);
          });*/
        };
      }
    };
  });
