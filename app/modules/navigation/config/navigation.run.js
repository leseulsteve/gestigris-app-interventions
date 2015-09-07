'use strict';

angular.module('navigation').run(
  function ($rootScope, $timeout, $state, Navigation, MenuItem) {

    $timeout(function () {
      $rootScope.currentStateTitle = $state.current.title;
    });

    _.forEach($state.get(), function (state) {
      if (state.nav) {
        _.forOwn(state.nav, function (menuItemConfig, menuName) {
          Navigation.add(menuName, new MenuItem(_.assign(menuItemConfig, {
            stateName: state.name
          })));
        });
      }
    });
  });
