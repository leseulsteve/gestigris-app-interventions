'use strict';

angular.module('navigation').factory('MenuItem',
  function () {

    var MenuItem = function (config) {
      this.stateName = config.stateName;
      this.icon = config.icon;
      this.title = config.title;
    };

    return MenuItem;
  });
