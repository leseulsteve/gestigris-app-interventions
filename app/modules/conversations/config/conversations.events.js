'use strict';

angular.module('conversations').run(
  function ($rootScope, Conversation, Toast) {

    $rootScope.$on('Socket:messages:created', function ($event, data) {
      console.log(data.author, $rootScope.currentUser._id);
      // if (data.author !== $rootScope.currentUser._id) {
      Conversation.findById(data.conversation).then(function (conversation) {
        if (_.contains(_.pluck(conversation.participants, '_id'), $rootScope.currentUser._id)) {
          var toast = new Toast({
            templateUrl: 'modules/conversations/views/new-message.toast.html',
            controller: 'NewMessageToastController',
            controllerAs: 'newMessageToastCtl',
            locals: {
              user: data.author,
              subject: conversation.getTitle(),
              message: data
            },
            bindToController: true
          });
          toast.show();
        }
      });
      //}
    });

  });
