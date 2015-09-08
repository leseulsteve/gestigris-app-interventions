'use strict';

angular.module('cards').factory('ContextualCard',
  function ($templateCache, rfc4122) {

    var ContextualCard = function (params) {
      this.icon = params.icon;
      this.title = params.title;
      this.list = params.list;
      this.itemTemplate = rfc4122.v4() + '.html';
      $templateCache.put(this.itemTemplate, params.itemTemplate);
    };

    return ContextualCard;
  });
