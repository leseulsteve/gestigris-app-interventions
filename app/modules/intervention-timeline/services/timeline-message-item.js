'use strict';

angular.module('intervention-timeline').factory('TimelineMessageItem',
  function (TimelineItem) {

    var TimelineMessageItem = function (message) {

      TimelineItem.call(this, {
        date: message.date
      });

      this.message = message;
    };

    TimelineMessageItem.prototype = Object.create(TimelineItem.prototype);

    return TimelineMessageItem;

  });
