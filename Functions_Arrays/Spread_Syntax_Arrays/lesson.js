"use strict";

console.log("the min of 1,2,3: ", Math.min(1,2,3)); 

let arr1 = [1,2,3];

console.log("the min of ar1 without spread: ", Math.min(arr1));
console.log("the min of ar1 with spread: ", Math.min(...arr1)); 

let arr2 = [4,5,6];
let arr3 = [3,7,2];
console.log("Min of arr2 and arr3: ", Math.min(...arr2, ...arr3));

console.log("Min of arr2, arr3, and more: ", Math.min(...arr2,0, ...arr3,8));

// Can use Spread Syntax to initialize arrays
let arrays = [...arr1, 10, ...arr3, 20];

let str = "SkillSoft"
console.log("Formed using spread syntax :", [...str]);
console.log("Array fromed with Array.from(str)", Array.from(str));
