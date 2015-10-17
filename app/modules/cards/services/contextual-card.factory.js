'use strict';

angular.module('cards').factory('ContextualCard',
  function () {

    var ContextualCard = function (params) {
      this.icon = params.icon;
      this.title = params.title;
      this.list = params.list;
      this.contentTemplateUrl = params.contentTemplateUrl;
    };

    return ContextualCard;
  });
