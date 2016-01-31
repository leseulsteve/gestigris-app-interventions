'use strict';

angular.module('core').run(
  function ($window, $rootScope, $q, PlageIntervention) {

    $rootScope.loadingApp = true;

    $window.addEventListener('beforeunload', function () {
      $window.localStorage.setItem('lastVisit', new Date());
    });

    $rootScope.$on('$stateChangeSuccess', function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    function loadData() {

      var promises = [];

      promises.push(PlageIntervention.findProchaines().then(function (plagesInterventions) {

        $rootScope.plagesInterventions = {
          all: plagesInterventions,
          open: _.filter(plagesInterventions, function (plage) {
            return plage.hasOpen();
          }),
          waiting: _.filter(plagesInterventions, function (plage) {
            return plage.hasWaiting();
          }),
          confirmed: _.filter(plagesInterventions, function (plage) {
            return plage.hasConfirmed();
          })
        };

      }));

      $rootScope.$on('Socket:interventions:create', function ($event, data) {
        var plage = new PlageIntervention(data);
        PlageIntervention.postFind(plage, function () {
          $rootScope.plagesInterventions.open.push(plage);
        });
      });

      /* promises.push(Conversation.getFromTeam().then(function(conversations) {
        $rootScope.conversations = {
          equipe: conversations
        };
      }));*/

      $q.all(promises).then(function () {
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
