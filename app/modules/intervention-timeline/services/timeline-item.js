'use strict';

angular.module('intervention-timeline').factory('TimelineItem',
  function (Moment) {

    var TimelineItem = function (params) {
      _.merge(this, params);

      var getDate = _.constant(new Moment(this.date));
      getDate = getDate;
    };

    return TimelineItem;

  });
