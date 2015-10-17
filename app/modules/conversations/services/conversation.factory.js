'use strict';

angular.module('conversations').factory('Conversation',
  function (Schema, Message) {

    var Conversation = new Schema('conversation');

    Conversation.post('find', function (next) {

      var that = this;

      Message.find({
        conversationId: this._id
      }).then(function (messages) {
        that.messages = messages;
        next();
      });
    });

    return Conversation;

  });
