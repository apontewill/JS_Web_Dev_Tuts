"use strict";
let prices = new Array(10,20,36,40,47);
let shalllowCopy = prices;

console.log("Before changing the shallowcopy, prices = \n", prices);

shalllowCopy[0]= 70;

console.log("After changing the shallowcopy, prices = \n", prices);

// The shallowCopy and prices varibale are pointed towards the same data.
// deepCopy copys to a new location in memory usin slice()
let deepCopy = prices.slice();

prices.push(100);
console.log("Contents of prices after a push: \n", prices);
prices.unshift(0);
console.log("Contents of prices after an unshift: \n", prices);
prices.pop()
console.log("Contents of prices after a pop: \n", prices);
prices.shift("Contents of prices after a shift \n", prices);
// delete from somewhere other than front or end of array
delete prices[2];
console.log("Contents of prices after a delete at index 2:\n",prices);