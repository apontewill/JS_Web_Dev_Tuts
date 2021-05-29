"use strict";
// Assign variable using var
var price1 = 5;
var price2 = 10;
var total = price1 + price2;

console.log("Sum of prices = ", total);
// Updating variables declared with var
price1 = 21;
price2 = 14;
total = price1 + price2;

console.log("UPDATED Sum of prices = ", total);
// Re-declaring the variables with var
var price1 = 500;
var price2 = 310;
var total = price1 + price2;

console.log("RE-Declared Su of prices =", total);

// Assign variables using let
let dividend = 420;
let divisor = 20;

console.log('The division result ', dividend/divisor);

// Update value using let keyword
dividend = 720;
divisor = 30;

console.log('The division result ', dividend/divisor);

/*Let does not permit re-declaration.
Once a variable has been declared with let,
it can be updated but not redeclared
*/
// let dividend = 880;
// let divisor = 40;
// console.log('The division result ', dividend/divisor);

/* The const keyword represents constants
Constants can only be defined once.
Updates and redefinitions are not permitted
*/

const MY_BIRTHDAY = '8-18-1997';
console.log(`My Birthday is on ${MY_BIRTHDAY}`)