'use strict';

angular.module('interventions').directive('participationButton',
  function () {
    return {
      restrict: 'E',
      scope: {
        intervention: '='
      },
      templateUrl: 'modules/interventions/views/participation.button.html',
      link: function (scope) {

        var states = {
          'OPEN': {
            icon: 'action:favorite_border',
            toolTip: 'Aimerais participer'
          },
          'WAITING': {
            icon: 'action:favorite',
            toolTip: 'Ne plus participer'
          },
          'CONFIRMED': {
            icon: 'navigation:check',
            toolTip: 'Confirmé!'
          },
          'REFUSED': {
            icon: 'social:mood_bad',
            toolTip: 'Refusé'
          }
        };

        scope.button = {
          changeState: function () {
            switch (scope.state) {
            case states.OPEN:
              scope.intervention.register();
              break;
            case states.WAITING:
              scope.intervention.unregister();
              break;
            }
          },
          disabled: false
        };

        var unlisten = angular.noop;

        function listenStateChange() {
          unlisten = scope.intervention.on('stateChange', function (intervention) {
            setState(intervention);
          });
        }

        function setState(intervention, startListening) {
          scope.state = states[intervention.getState()];
          if (scope.state === states.OPEN ||  scope.state === states.WAITING) {
            scope.button.disabled = false;
            if (startListening) {
              listenStateChange();
            }
          } else {
            scope.button.disabled = true;
            unlisten();

          }
        }

        setState(scope.intervention, true);

        scope.$on('$destroy', function () {
          unlisten();
        });
      }
    };
  });
