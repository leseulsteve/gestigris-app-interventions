'use strict';

angular.module('core').run(
  function($rootScope, $q, InterventionService, ConversationService, $timeout) {

    $timeout(function() {
      $rootScope.loadingApp = true;
    });

    function loadData() {

      $q.all([InterventionService.init(), ConversationService.init()]).then(function() {
        $rootScope.loadingApp = false;
      });
    }

    $rootScope.$on('UserAuth:signin:success', function() {
      loadData();
    });

    if ($rootScope.currentUser.isAuthentified()) {
      loadData();
    }
  });