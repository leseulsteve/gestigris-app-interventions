'use strict';

angular.module('intervention-timeline').directive('interventionTimeline',
  function ($rootScope) {
    return {
      restrict: 'E',
      templateUrl: 'modules/intervention-timeline/views/intervention.time-line.html',
      link: function (scope) {
        console.log(3343);
        scope.events = [{
          badgeClass: 'info',
          badgeIconClass: 'glyphicon-check',
          title: 'First heading',
          content: 'Some awesome content.'
        }, {
          badgeClass: 'warning',
          badgeIconClass: 'glyphicon-credit-card',
          title: 'Second heading',
          content: 'More awesome content.'
        }];

        scope.addMessage = function (newMessage) {
          scope.events.unshift({
            badgeClass: 'warning',
            badgeIconClass: 'glyphicon-credit-card',
            title: $rootScope.currentUser.toString(),
            content: angular.copy(newMessage.body)
          });
          newMessage = {};
        };
      }
    };
  });
