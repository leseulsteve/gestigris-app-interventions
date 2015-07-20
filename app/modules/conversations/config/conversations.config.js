'use strict';

angular.module('conversations')
  .config(function (NavigationProvider) {

    NavigationProvider.set('sideNav', {
      menuItems: [{
        title: 'Conversations',
        state: 'conversation',
        icon: 'forum'
      }]
    });

  });
