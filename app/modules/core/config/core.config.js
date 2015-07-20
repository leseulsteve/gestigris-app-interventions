'use strict';

angular.module('conversations')
  .config(function (NavigationProvider) {

    NavigationProvider.set('sideNav', {
      headerTemplateUrl: 'modules/core/views/navigation/header.side-bar.html'
    });

  });
