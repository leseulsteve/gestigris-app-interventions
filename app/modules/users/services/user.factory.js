'use strict';

angular.module('users').factory('User',
  function ($http) {

    return {
      findOne: function (userId) {
        return $http.get('http://localhost:9000/api/v1/users/' + userId).then(function (response) {
          return response.data;
        });
      }
    };
  });
