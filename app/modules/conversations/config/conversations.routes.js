'use strict';

angular.module('conversations').config(
  function ($stateProvider) {

    $stateProvider

      .state('conversations', {
      url: '/conversations',
      templateUrl: 'modules/conversations/views/conversations.html',
      nav: {
        sideNav: {
          title: 'Conversations',
          icon: 'forum'
        }
      }
    });
  });
