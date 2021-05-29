"use strict";
// Beta function syntax
function mphToKmph(mph){
    console.log("MPH entered => ", mph);
    return 1.61 * mph;
}
var speedLimit = mphToKmph(65);
console.log(speedLimit);
// Less beta syntax
let mphToKmphArrow = mph => {
    console.log("MPH entered => ", mph);
    return 1.61 * mph;
} 
// Alpha syntax
let mphToKmphImplicit = mph => 1.61 * mph;
speedLimit = mphToKmphImplicit(65)
console.log(speedLimit);

let triangleArea = (base, height) => 0.5 * base * height;

// can copy functions
let functionCopy = triangleArea;

// anonomous function for farenheight to celsius
var x = function(f){return 5 *(f-32)/9};
