'use strict';

angular.module('etablissements').directive('etablissementInterventionsCard',
  function () {
    return {
      scope: {
        etablissement: '=',
        interventions: '='
      },
      templateUrl: 'modules/etablissements/views/etablissement-interventions.card.html',
      link: function (scope, element) {

        scope.date = scope.interventions[0].date.start;

        var imageElement = element.find('img');
        //wrapperElement = imageElement.parent();

        /*wrapperElement.css('max-height', '200px');
        wrapperElement.css('overflow', 'hidden');*/

        imageElement.bind('load', function () {

          scope.showCard = true;
          /*var wrapperHeight = wrapperElement.prop('clientHeight');

          var imageHeight = imageElement.prop('height');

          var overlap = (wrapperHeight - imageHeight) / 2;
          imageElement.css('margin-top', overlap + 'px');
          imageElement.css('margin-bottom', overlap + 'px');*/

        });
      }
    };
  });
