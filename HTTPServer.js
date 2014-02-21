/**
 * Created with JetBrains WebStorm.
 * User: abhay
 * Date: 20/7/13
 * Time: 11:58 AM
 * To change this template use File | Settings | File Templates.
 */
var http = require("http");
var router = require("./router");

function start(){
function onRequest(request, response){
//  var pathname = url.parse(request.url).pathname;
//  console.log(pathname);
//
//  response.writeHead(200, {"Content-Type":"text/plain"});
//  response.write("Hello there!");
//  response.end();

    router.route(request, response);

}


http.createServer(onRequest).listen(8080);
console.log("server starts");
}

exports.start = start;