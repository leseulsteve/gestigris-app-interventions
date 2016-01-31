'use strict';

angular.module('intervention-timeline').factory('InterventionTimeLineFactory',
  function ($q, $rootScope, TimeLine, TimelineMessageItem, Conversation, TimelineStateChangeItem) {

    function getMessages(intervention) {

      return Conversation.getById(intervention.conversation).then(function (conversation) {
        return _.map(conversation.messages, function (message) {
          return new TimelineMessageItem(message);
        });
      });
    }

    function getStateChanges(intervention) {

      return _.noopPromise(_.map(intervention.stateChanges, function (stateChange) {
        return new TimelineStateChangeItem(stateChange);
      }));
    }

    function setListeners(intervention) {
      $rootScope.$on('Message:new', function ($event, newMessage) {
        intervention.add(new TimelineMessageItem(newMessage));
      });
      $rootScope.$on('StateChange:new', function ($event, newStateChange) {
        intervention.add(new TimelineStateChangeItem(newStateChange));
      });
    }

    return {
      get: function (intervention) {

        var promises = [];

        promises.push(getMessages(intervention));

        promises.push(getStateChanges(intervention));

        return $q.all(promises).then(function (timeLineItems) {
          var timeLine = new TimeLine(timeLineItems);
          setListeners(timeLine);
          return timeLine;
        });
      }
    };

  });
