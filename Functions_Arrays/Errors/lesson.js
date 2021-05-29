"use strict";
// try{
//     document.write("Welcome guest!");
//     //document.write(null); // will throw error
//     console.log("No error!");
// }
// catch(err){
//     console.log(err.message);
// }

function isEven(){
    var a;
    a = document.getElementById("num").value;
    try{
        if((a%2)==0){
            console.log("Number is even");
        }
        else{
            throw "get that dirty odd shit outta heeeeere";
        }
    }
    catch(msg){
        console.log("The enetered value is " + msg);
    }
}