'use strict';

angular.module('myAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/message', {
        templateUrl: 'app/message/message.html',
        controller: 'MessageCtrl'
      });
  });
