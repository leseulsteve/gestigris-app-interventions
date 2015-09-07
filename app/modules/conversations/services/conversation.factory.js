'use strict';

/**
 * @ngdoc service
 * @name conversations.Services.Conversation
 * @description Conversation Factory
 */
angular
  .module('conversations')
  .factory('Conversation',
    function () {
      return {

        find: function () {
          return [{
            _id: 1,
            subject: 'Sujet',
            messages: [{
              _id: 1,
              date: new Date(),
              author: 1,
              body: 'Message body'
            }, {
              _id: 2,
              date: new Date(),
              author: 2,
              body: 'Message body 2'
            }],

          }];
        }
      };
    });
