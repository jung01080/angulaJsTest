'use strict';

(function(){
  testApp.board.serverApi = {};
  var a = testApp.board.serverApi;

  a.addPost = function(reqUrl, $http, successFunc, reqParam, errorFunc){
    var devResult = {aaa:'ccccc'};
    testApp.ajaxNg(
      '/b',
      $http,
      successFunc,
      devResult,
      reqParam,
      errorFunc
    );
  }

  a.getList = function($http, successFunc, reqParam, errorFunc){
    var devResult = {
      result:[
        {
          "title": "title1",
          "content": "content1",
          "writer": "writer1",
          "regdate": "regDate1"
        },
        {
          "title": "title2",
          "content": "content2",
          "writer": "writer2",
          "regdate": "regDate2"
        },
        {
          "title": "title3",
          "content": "content3",
          "writer": "writer3",
          "regdate": "regDate3"
        },
        {
          "title": "title4",
          "content": "content4",
          "writer": "writer4",
          "regdate": "regDate4"
        },
        {
          "title": "title5",
          "content": "content5",
          "writer": "writer5",
          "regdate": "regDate5"
        },
        {
          "title": "title6",
          "content": "content6",
          "writer": "writer6",
          "regdate": "regDate6"
        },
        {
          "title": "title7",
          "content": "content7",
          "writer": "writer7",
          "regdate": "regDate7"
        },
        {
          "title": "title8",
          "content": "content8",
          "writer": "writer8",
          "regdate": "regDate8"
        },
        {
          "title": "title9",
          "content": "content9",
          "writer": "writer9",
          "regdate": "regDate9"
        },
        {
          "title": "title10",
          "content": "content10",
          "writer": "writer10",
          "regdate": "regDate10"
        },
        {
          "title": "title11",
          "content": "content11",
          "writer": "writer11",
          "regdate": "regDate11"
        },
        {
          "title": "title12",
          "content": "content12",
          "writer": "writer12",
          "regdate": "regDate12"
        },
        {
          "title": "title13",
          "content": "content13",
          "writer": "writer13",
          "regdate": "regDate13"
        },
        {
          "title": "title14",
          "content": "content14",
          "writer": "writer14",
          "regdate": "regDate14"
        },
        {
          "title": "title15",
          "content": "content15",
          "writer": "writer15",
          "regdate": "regDate15"
        }
      ]
    };

    testApp.ajaxNg(
      '/getList',
      $http,
      successFunc,
      devResult,
      reqParam,
      errorFunc
    );
  }

})();
