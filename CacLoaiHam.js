/*
1. Declaration function
2. Expression function
3. Arrow function
 */

showMessage();

function showMessage(){
    console.log('Declaration function');
}

var showMessage2 = function(){
    console.log('Expresstion function');
}

setTimeout(function testName(){

});

var myObject = {
    myFunction: function testName(){

    }
}
//hosting