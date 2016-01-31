 'use strict';

 angular.module('conversations').config(
   function (SocketFactoryProvider) {
     SocketFactoryProvider.addRoute('messages');
   });
