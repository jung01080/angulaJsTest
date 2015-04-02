'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testAppApp
 */

mdBoardApp
  .controller('ListCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    testApp.board.serverApi.getList(
      $http,
      function(data){
        $scope.articleList = data.result;
      }
      //{params:{"555":"888", "333":"999"}}
    );

    $scope.search = {
      type:'title'
      ,text:''
    };

    $scope.search.search = function(){
      testApp.log({'type':$scope.search.type, 'text':$scope.search.text}  );
      testApp.board.serverApi.getList(
        $http,
        function(data){
          $scope.articleList = data.result;
        }
        ,{params:{'type':$scope.search.type, 'text':$scope.search.text}}
      )
    };
  });
