'use strict';

angular.module('conversations').directive('conversationFiche',
  function ($timeout) {
    return {
      restrict: 'E',
      scope: {
        conversation: '=',
      },
      templateUrl: 'modules/conversations/views/conversation.fiche.html',
      link: function (scope, element) {
        $timeout(function () {
          var imageElement = element.find('img');
          if (imageElement.length === 0) {
            scope.showCard = true;
          } else {
            imageElement.bind('load', function () {
              scope.showCard = true;
              scope.$apply();
            });
          }
        });
      }
    };
  });
