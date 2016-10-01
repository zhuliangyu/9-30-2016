/**
 * Created by macbook on 2016-09-30.
 */
var net=require("net");


var PORT=8080;
var HOST='127.0.0.1';
var server=net.createServer(function (socket) {
    socket.on('data',function (data) {
        console.log(data.toString());
        socket.write(data.reverse().toString());
    });
});

server.listen(PORT,HOST);
console.log("server is connection!");

var reverse=function(string) {

    return string.split("").reverse().join("");


}