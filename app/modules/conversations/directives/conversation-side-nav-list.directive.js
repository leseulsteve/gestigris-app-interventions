'use strict';

angular.module('conversations').directive('conversationSideNavList',
  function ($rootScope) {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        type: '@',
        chuckSize: '@'
      },
      templateUrl: 'modules/conversations/views/conversation-side-nav.list.html',
      link: function (scope, element) {
        element.addClass('nav-list');
        $rootScope.$watch('conversations.equipe', function (conversations) {
          if (conversations) {
            scope.showPlus = conversations.length > scope.chuckSize;
            scope.conversations = _.slice(conversations, 0, scope.chuckSize);
          }
        });
      }
    };
  });
