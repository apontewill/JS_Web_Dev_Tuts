"use strict";

let funcBody = prompt("Enter the body of your function: ");
// This allows you to create a function with strings
// In this example we enter the function body in the prompt to calculate the weighted score of two grades
let weightedScore = new Function("verbalScore","mathScore", funcBody);

console.log("Weighted score for (78, 91: ", weightedScore(78,91));
// In the web browser prompt enter
// return (2*verbalScore + mathScore)/3

let greet = new Function("console.log('Welcome!')");