'use strict';

angular.module('core').run(
  function ($rootScope, $q, InterventionService, ConversationService) {

    $rootScope.loadingApp = true;

    $rootScope.$on('$stateChangeSuccess', function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    function loadData() {

      $q.all([InterventionService.init(), ConversationService.init()]).then(function () {
        $rootScope.loadingApp = false;
      });
    }

    $rootScope.$on('UserAuth:signin:success', function () {
      loadData();
    });

    if ($rootScope.currentUser.isAuthentified()) {
      loadData();
    }
  });
