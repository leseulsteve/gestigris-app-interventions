'use strict';

angular.module('conversations').factory('Message',
  function (Schema, User) {

    var Message = new Schema('message');

    Message.post('find', function (next) {

      var that = this;

      User.findById(this.author).then(function (user) {
        that.author = user;
        next();
      });
    });

    return Message;

  });
