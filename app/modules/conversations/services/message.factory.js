'use strict';

angular.module('conversations').factory('Message',
  function (Schema, User, UserAuth) {

    var Message = new Schema('conversation/:conversation/message');

    Message.post('find', function (next) {
      this.author = new User(this.author);
      next();
    });

    Message.prototype.getAuthor = function () {
      return this.author;
    };

    var currentUser = UserAuth.getCurrentUser();

    Message.prototype.currentUserIsAuthor = function () {
      return currentUser.equals(this.getAuthor());
    };

    return Message;

  });
