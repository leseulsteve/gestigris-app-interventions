'use strict';

angular.module('core').directive('z2',
  function () {
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '<md-icon md-svg-icon="person" class="md-avatar"></md-icon>',
      templateUrl: 'modules/core/views/z2.html',
      // replace: true,
      // transclude: true,
      //compile: function (tElement) {},
      link: function (scope, element) {

        scope.lockIconName = 'lock_outline';

        element.attr('layout-fill', '');

        /*var tabsContainer = element.find('md-tabs').parent();

        angular.element($window).bind('scroll', function () {
          if (this.pageYOffset >= 120 && tabsContainer.hasClass('md-whiteframe-z3')) {
            tabsContainer.removeClass('md-whiteframe-z3');
            tabsContainer.addClass('md-whiteframe-z2');
          } else if (this.pageYOffset < 120 && tabsContainer.hasClass('md-whiteframe-z2')) {
            tabsContainer.removeClass('md-whiteframe-z2');
            tabsContainer.addClass('md-whiteframe-z3');
          }
        });*/

        /* $timeout(function () {

           scope.showZ2 = true;
         }, 500);

         $rootScope.$on('$stateChangeStart',
           function (event, toState) {
             if (toState.name === 'login') {
               scope.logedIn = true;
               element.addClass('login');
             }
           });*/
      },
      controller: function () {

        /* var loginForm = $element.find('md-content');

         $scope.login = function() {
          
           $animate.addClass(loginForm, 'shake').then(function() {
             $animate.removeClass(loginForm, 'shake');
           });
         }

         $scope.a = function() {
           var lock = angular.element($element[0].getElementsByClassName("login-icon"));

           $animate.addClass(lock, 'bounce').then(function() {
             $animate.removeClass(lock, 'bounce')
             $scope.lockIconName = 'lock_open';
             $timeout(function() {
               $animate.addClass(loginForm, 'slideOutDown').then(function() {
                 $scope.logedIn = true;
                 $state.go('interventions');
               });
             });
               
             });
             
           
         }
         /*var refresh = true;
         $rootScope.$on('$stateChangeStart',
           function (event, toState) {

             if (toState.name === 'login') {
               $scope.hideMainView = false;
             } else {
               if (!refresh) {
               console.log('hide')
               //$scope.hideMainView = true;
             } else {
               
               refresh = false;
             }
             }
             
           });

         $rootScope.$on('$stateChangeSuccess',
           function (event, toState) {
             if (toState.name === 'login') {
               $element.css('position', 'relative');
               $element.css('top', '-18%');
             } else {

             }
           });*/
      }
    };
  });
