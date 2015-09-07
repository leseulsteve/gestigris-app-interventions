'use strict';

angular.module('core')
  .run(function (UserAuth) {

    if (UserAuth.isAuthentified) {
      console.log(43434);
    }

  });
