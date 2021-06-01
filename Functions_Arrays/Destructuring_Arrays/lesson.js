"use strict";

let numbers = [10,20,30,40];
//we want to assign each of these elements in the list to variables a, b, c, d
let [a,b,c,d] = numbers;
// what if we want to set the a to numbers[1] and b to the rest of the array
[a, ...b] = numbers;
// ignore the first value in the array
[,...b] = numbers;
