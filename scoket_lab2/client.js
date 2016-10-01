/**
 * Created by macbook on 2016-09-30.
 */

var readline=require("readline");
var net=require('net');
var PORT=8080;
var HOST='127.0.0.1';

var rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout

});

var socket=net.createConnection({
    port:PORT,
    host:HOST
});

socket.on('data',function (data) {
    console.log('Server respond with: '+data.toString());
})

rl.question("what?\n",function (userInput) {
    socket.write(userInput);
    console.log("UserType "+userInput);
    rl.close();
})