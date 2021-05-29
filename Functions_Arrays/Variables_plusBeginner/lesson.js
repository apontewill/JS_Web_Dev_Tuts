"use strict";
window.onload = firstFunction;
function firstFunction(){
    var x = 15;
    console.log("1st function : x = ", x);
}

function secondFunction(){
    console.log("2nd function before declaration: x = ", x);
    var x = 20;
    console.log("2nd function after declaration : x = ", x);
}
secondFunction();
// Variables
let globalLet = "This is a global variable declared with let";
var globalVar = "This is a global variable declared with var";

let numLet = 10;
var numVar = 20;
const NUM_CONST = 30;
function scopeFunction(){
    let localLet = "This a local variable with let";
    var localVar = "This a local variable with var";
    undeclaredLocalVar = "This is an undeclared variable";

    console.log("globalLet from inside scopeFunction: ", globalLet);
    console.log("globalVar from inside scopeFunction: ", globalVar);

    console.log("numLet from inside scopeFunction", numLet);
    console.log("numVsr from inside scopeFunction", numVsr);
    console.log("NUM_CONST from inside scopeFunction", NUM_CONST);
}