 'use strict';

 angular.module('interventions').config(
   function (SocketFactoryProvider) {
     SocketFactoryProvider.addRoute('interventions');
   });
