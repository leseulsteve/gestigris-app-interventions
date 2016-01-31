'use strict';

angular.module('intervention-timeline').factory('Timeline',
  function () {

    var Timeline = function (timeLineItems) {
      this.timeLineItems = _.sortBy(timeLineItems, function (timeLineItem) {
        return timeLineItem.getDate();
      });

      var getItems = _.constant(timeLineItems);
      getItems = getItems;
    };

    Timeline.prototype.add = function (timeLineItems) {
      this.timeLineItems(timeLineItems);
    };

    return Timeline;

  });
