'use strict';

_.mixin({
  'split': function (array, nbGroups) {
    var groups = [];

    for (var i = 0; i < nbGroups; i++) {
      groups[i] = [];
    }

    var j = 0;
    _.forEach(array, function (item) {
      groups[j].push(item);
      j++;
      if (j === nbGroups) {
        j = 0;
      }
    });
    return groups;
  }
});
