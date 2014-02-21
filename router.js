/**
 * Created with JetBrains WebStorm.
 * User: abhay
 * Date: 20/7/13
 * Time: 12:51 PM
 * To change this template use File | Settings | File Templates.
 */
var url = require("url");

function route(request, response){

    var pathname = url.parse(request.url).pathname;

    console.log(pathname);
    var responseMsg = '';
    if (pathname === "/add"){
        responseMsg = "add operation"
    }
    else if (pathname === "/delete"){
        responseMsg = "delete operation"
    }
    else{
        responseMsg = "wrong operation"
    }

    var reqContents = '';

    for(item in request){
        reqContents += item + " : " + request[item];
    }


    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write(" Response : " + responseMsg);
    response.end();
}

exports.route = route;
