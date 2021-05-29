"use strict";
var num = 16;
console.log("Binary value of 16", num.toString(2));
console.log("Octol decimal value of 16", num.toString(8));

var a = 10;
console.log("Type of number before toString() : ", typeof a);

var b = a.toString();
console.log("Type of number after toString() : ", typeof b);

var x = 3.4567;
console.log("3.4567 rounded to 0 decimals : ", x.toFixed(0));
console.log("3.4567 rounded to 2 decimals : ", x.toFixed(2));
console.log("3.4567 rounded to 5 decimals : ", x.toFixed(5));

var y = 25.678;
console.log("Value of 25.678 without specifying precision : ", y.toPrecision());
console.log("Value of 25.678 when specifying precision is 2 : ", y.toPrecision(2));
console.log("Value of 25.678 when specifying precision is 5 : ", y.toPrecision(5));