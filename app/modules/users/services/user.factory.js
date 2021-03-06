'use strict';

angular.module('users').factory('User',
  function (Schema, $window) {

    var User = new Schema('user');

    User.prototype.toString = function () {
      return this.pseudo;
    };

    User.prototype.getFullName = function () {
      return this.firstname + ' ' + this.lastname;
    };

    User.prototype.getTitle = function () {
      return this.title;
    };

    User.prototype.hasCar = function () {
      return this.voiture;
    };

    User.prototype.getLastVisit = function () {
      var lastVisit = $window.localStorage.getItem('lastVisit');
      return lastVisit ? new Date(lastVisit) : undefined;
    };

    User.prototype.equals = function (user) {
      return user.pseudo === this.pseudo;
    };

    return User;

  });
