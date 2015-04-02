'use strict';

(function(){
  window.testApp = {};
  var a = testApp;

  a.isDev = false;
  if(location.href.indexOf('localhost') > -1){
    a.isDev = true;
  }

  a.serverApiHost = 'http://localhost:8888';

  a.ajaxNg = function(reqUrl, $http, successFunc, devResult, reqParam, errorFunc){
    if(reqUrl.indexOf('?') == -1){
      reqUrl = reqUrl + '?';
    }
    else if(reqUrl[reqUrl.length - 1] != '&'){
      reqUrl = reqUrl + '&'
    }

    var url = this.serverApiHost + reqUrl + 'callback=JSON_CALLBACK';
    reqParam = reqParam || {};
    var req = {
      method: reqParam.method || 'GET',
      headers:reqParam.headers || {},
      params:reqParam.params || {},
      data:reqParam.data || {}
    };

    a.log('call ajaxNg', 'isDev = ' + a.isDev, url, JSON.stringify(req));

    if(!this.isDev){
      $http.jsonp(url, req)
        .success(function(data, status, headers, config) {
          successFunc(data, status, headers, config);
        }).
        error(function(data, status, headers, config) {
          if(errorFunc){
            errorFunc(data, status, headers, config);
          }
        });
    }
    else{
      successFunc(devResult);
    }
  };

  a.log = function(){
    if(console){
      var args = Array.prototype.slice.call(arguments, 0);
      console.log.apply(console, args);
    }
  }

})();
