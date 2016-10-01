/**
 * Created by macbook on 2016-09-30.
 */
var net=require("net");


var PORT=8080;
var HOST='127.0.0.1';
var server=net.createServer(function (socket) {
    socket.on('data',function (data) {
        console.log(data.toString());
        socket.write(maxMyString(data).toString());
    });
});

server.listen(PORT,HOST);
console.log("server is connection!");

function maxMyString(string) {


    var num_arr=string.toString().split(" ");
    var new_arr=[];
    for (var i = 0; i < num_arr.length; i++) {
        new_arr.push(parseInt(num_arr[i]));

    }

    return Math.max.apply(Math, new_arr);
    // return Math.max(new_arr);


};