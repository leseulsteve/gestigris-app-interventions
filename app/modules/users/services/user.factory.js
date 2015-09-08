'use strict';

angular.module('users').factory('User',
  function (Schema, Intervention) {

    var User = new Schema('user');

    User.prototype.toString = function () {
      return this.firstname + ' ' + this.lastname;
    };

    User.prototype.getScheduledInterventions = function () {
      return Intervention.getScheduledInterventions(this);
    };

    return User;

  });
