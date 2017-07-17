'use strict';

angular.module('interventions').directive('participationButton',
  function () {
    return {
      restrict: 'E',
      scope: {
        intervention: '='
      },
      templateUrl: 'modules/interventions/views/participation.button.html',
      link: function (scope, element) {

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
            switch (scope.intervention.getstatus()) {
            case 'OPEN':
              scope.intervention.register();
              break;
            case 'WAITING':
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

        var currentStateName,
          mdIcon = element.find('md-icon');

        function setState(intervention, startListening) {

          console.log(intervention.getstatus());

          mdIcon.removeClass(currentStateName);
          currentStateName = intervention.getstatus();
          mdIcon.addClass(currentStateName);

          scope.state = states[currentStateName];

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
