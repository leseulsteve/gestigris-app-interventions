'use strict';

angular.module('conversations').factory('Message',
  function (Schema, User) {

    var Message = new Schema('message');

    Message.post('find', function (next) {
      this.author = new User(this.author);
      next();
    });

    Message.prototype.getAuthor = function () {
      return this.author;
    };

    return Message;

  });
