"use strict";
// Syntax below is a function expression
let addition = function(a,b) {
    return a+b;
}

let multiplication = function(a, b){
    return a*b;
}

let substitution = function(a, b){
    return a-b;
}

let division = function(a, b){
    return a/b;
}
// Syntax below is function declaration
function calculation(a, b, calculationType){
    return calculationType(a,b);
}

let output = calculation(10, 30, addition);
console.log("Addition output = ", output);
