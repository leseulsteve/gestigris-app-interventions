'use strict';

angular.module('navigation').service('Navigation',
  function () {

    var menus = {};

    return {

      add: function (menuId, menuItem) {
        if (_.isUndefined(menus[menuId])) {
          menus[menuId] = [];
        }
        menus[menuId].push(menuItem);
      },

      get: function (menuId) {
        return menus[menuId];
      }

    };
  });
