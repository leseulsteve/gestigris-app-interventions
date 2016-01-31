'use strict';

angular.module('core').run(
  function ($q) {

    _.mixin({
      'noopPromise': function (obj) {
        var deffered = $q.defer();
        deffered.resolve(obj);
        return deffered.promise;
      }
    });
  });
