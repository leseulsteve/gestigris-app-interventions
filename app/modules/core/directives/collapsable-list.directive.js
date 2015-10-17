'use strict';

angular.module('core').directive('expendableListItem',
  function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        console.log('init');
        var settings = {
          animationDuration: 400,
          easing: 'swing'
        };

        element.find('expendable-list-item-body').addClass('collapse-card__body');

        element.bind('click', function () {
          console.log('click!');
          if (element.hasClass('active')) {

            element.removeClass('active');
            element.removeClass('md-whiteframe-6dp');
            element.addClass('md-whiteframe-1dp');
            $(element).find('.collapse-card__body').slideUp(settings.animationDuration, settings.onHideComplete);
          } else {
            element.addClass('active');
            element.removeClass('md-whiteframe-1dp');
            element.addClass('md-whiteframe-6dp');
            $(element).find('.collapse-card__body').slideDown(settings.animationDuration, settings.onShowComplete);
          }
        });
      }
    };
  });
