// A callback is where you invoke one function by passing a second function as
// an argument. where the expectation that the second function will be invoked after
// the operations performed within the first function
// USE WITH CAUTION
"use strict";

let items = [
    {name:"meat", price:25},
    {name:"vegies", price:17},
    {name:"cake", price:20},
    {name:"drinks", price:38}
];
/*
function getTotalCost(items){
    return items.reduce((sum, item) => sum + item.price, 0);
}

var totalCost = getTotalCost(items);
console.log("Total cost = ", totalCost);
*/

// We want the total cost calculated before we calculate taxes
function applyTaxes(totalCost){
    return 1.05 * totalCost;
}
//console.log("Total after taxes: ", applyTaxes(totalCost));
// To ensure the comment above we use a call back
function getTotalCost(items, callback){
    var totalCost = items.reduce((sum, itme) => sum + item.price, 0);
    return callback(totalCost);
}

var totalAfterTaxes = getTotalCost(items, applyTaxes);
console.log("Total afer taxes using callback: ", totalAfterTaxes);