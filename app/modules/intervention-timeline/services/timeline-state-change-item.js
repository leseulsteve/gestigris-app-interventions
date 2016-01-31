'use strict';

angular.module('intervention-timeline').factory('TimelineStateChangeItem',
  function (TimelineItem) {

    var TimelineStateChangeItem = function (stateChange) {

      TimelineItem.call(this, {
        date: stateChange.date
      });

      this.stateChange = stateChange;
    };

    TimelineStateChangeItem.prototype = Object.create(TimelineItem.prototype);

    return TimelineStateChangeItem;

  });
