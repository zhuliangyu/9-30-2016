/**
 * Created by macbook on 2016-09-30.
 */
var reverse=function(string) {

    var num_arr=string.split(" ");
    var new_arr=[];
    for (var i = 0; i < num_arr.length; i++) {
        new_arr.push(parseInt(num_arr[i]));

    }

    return Math.max.apply(Math, new_arr);
    // return Math.max(new_arr);


};

string="1 2 3 4 5";

console.log(reverse(string));