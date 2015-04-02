'use strict';

/**
 * @ngdoc overview
 * @name testAppApp
 * @description
 * # testAppApp
 *
 * Main module of the application.
 */

var mdBoardApp = angular
                  .module('boardApp', [
                    'ngAnimate',
                    'ngCookies',
                    'ngResource',
                    'ngRoute',
                    'ngSanitize',
                    'ngTouch'
                  ]);

mdBoardApp
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../../views/board/list.html',
        controller: 'ListCtrl'
      })
      .when('/write', {
        templateUrl: '../../views/board/write.html',
        controller: 'WriteCtrl'
      });
  });

mdBoardApp
  .controller('BoardController', ['$scope', '$location', '$http', function($scope, $location, $http){
    $scope.activeSideMenu = $location.path().toLowerCase().replace('/', '') || 'list';
  }]);


(function(){
  window.testApp.board = {};
})();
