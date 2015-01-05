'use strict';

/**
 * @ngdoc overview
 * @name testAppApp
 * @description
 * # testAppApp
 *
 * Main module of the application.
 */
angular
  .module('boardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../../views/board/list.html',
        controller: 'ListCtrl'
      })
      .when('/write', {
        templateUrl: '../../views/board/write.html',
        controller: 'WriteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('BoardController', function($scope){
    $scope.activeSideMenu = 'list';
  });
