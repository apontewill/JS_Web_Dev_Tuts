"use strict";
// MAP, REDUCE, FILTER very useful with Arrays and Arrays of objects
let items = [
    {name: "meat", price:25},
    {name: "veggies", price:17},
    {name: "cake", price:20},
    {name:"drinks", price: 38}
];
// We want to get all the prices of the objects and store in an array
// For loop
let prices = [];
for (let item of items){
    prices.push(item.price);
}
console.log("Price list using for loop: " + prices);
// MAP method
let priceList = items.map(function(item){
    return item.price;
});
// ES6 Syntax MAP Method 
priceList = items.map(item => item.price);
// REDUCE & FILTER METHOD
// We want the total cost of all items
let total = 0;
// For loop
for (let item of items){
    total += item.price;
}
// REDUCE used for aggregation
let totalReducer = items.reduce((sum, item) => sum + item.price, 0); // the 0 is used to initailize the aggregator sum to 0
// We want all items greater than $25
// FILTER
let expensiveItems = items.filter(item => item.price >= 25);
// We want the total cost of all expensive items
let costOfExpgoods = expensiveItems.reduce((sum, item) => sum + item.price, 0);

// An array with duplicates 
const values = [3, 1, 3, 5, 2, 4, 4, 4];
// Set stores 1 of each unique value 
const setOfValues = new Set(values);
// How we save the set as an Array
const uniqueValues = [...setOfValues];
