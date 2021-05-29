"use strict";
// Above how to activate Strict Mode in JS
var a= 10;
// b = 50; <<<< WONT WORK IN STRICT MODE BUT WILL WORK IN DEFAULT JS 
var b = 50;
console.log(`The value of a is ${a} and b is ${b}`);
// wont work due to being keywords
var private = "A String";
var undefined = "Undefinded value";

console.log(`private var : ${private}`);
console.log(`Undefined var : ${undefined}`)