var http = require('http');
var url = require('url');

function onRequest(request, response) {
  console.log('request received.');
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  var pathname = JSON.stringify(url.parse(request.url).query);
  var b = pathname.replace('=', '":"');
  var callbackFunc = '';

  if(pathname != null){
    console.log('params --- ' + pathname);
  }

  //response.write('bbbbb = ' + typeof pathname);
  if(b && b != 'null'){
    var a = JSON.parse('{' + b + '}');
    if(a){
      callbackFunc = a.callback;
    }
  }
  response.write(callbackFunc + '({"aaa":"abc"})');

  switch (pathname)
          {
    case "/a": {
      response.write(callbackFunc + '({"aaa":"abc"})');
      break;
    }
    case "/b": {
      response.write(callbackFunc + '({"bbb":"bcd"})');
      break;
    }
  }
  //response.write('Hello World');
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log('server has started.');
