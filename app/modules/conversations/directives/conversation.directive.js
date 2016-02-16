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

        scope.currentUser = $rootScope.currentUser;

        var unwatch = scope.$watch('conversation', function (conversation) {
          if (conversation) {
            scope.messages = scope.conversation.getMessages();
            unwatch();
          }
        });

        scope.addMessage = function (newMessage) {

          Message.create(_.assign({
            conversation: scope.conversation._id,
          }, newMessage)).then(function (message) {
            scope.newMessage = {};
            scope.conversation.messages.push(message);

            var isParticipating = false,
              participants = scope.conversation.getParticipants();
            _.forEach(participants, function (participant) {
              isParticipating = participant.equals(message.author);
            });
            if (!isParticipating) {
              participants.push(message.author);
            }
          });
        };

        scope.deleteMessage = function (message) {
          message.remove().then(function () {
            _.pull(scope.conversation.messages, message);
          });
        };
      }
    };
  });
