"use strict";
// Initialize an object
let firstItem = {id:1, name:"laptop", price: 500};
let secondItem = {id:2, name:"watch",price:240};
// Access fields within the object
console.log(`firstItem as a name of ${firstItem.name} and a price of ${firstItem.price}`);

console.log(`secondItem as a name of ${secondItem.name} and a price of ${secondItem.price}`);

const USD_EUR = 0.9;
// // priceEUR wont work needs to be a function
// let thirdItem = {id:3,
//                 name:"headphones",
//                 brand: "Sonical",
//                 price: 84,
//                 priceEUR: this.price * USD_EUR};

let thirdItem = {id:3,
    name:"headphones",
    brand: "Sonical",
    price: 84,
    priceEUR: function(){return this.price * USD_EUR; }};
// can also do priceEuro as follows
let thirdItem = {id:3,
    name:"headphones",
    brand: "Sonical",
    price: 84,
    priceEUR() {return this.price * USD_EUR; }};

console.log(`Price of thirdItem in Euros: ${thirdItem.priceEUR()}`);
// BEGIN REMOVING PROPERTIES FROM OBJECTS VID
thirdItem = {id:3,names:"headphone",brand:"Sonical",price:84, priceEUR(){return price * USD_EUR;}};
// Add a new property to an object
thirdItem.mfgCountry = "Canada";
// Create an empty object
let fourthItem = new Object();
fourthItem.id = 4;
fourthItem.name = "cell phone";
fourthItem.price = 450;
console.log(fourthItem);
// Removing property from an object
delete fourthItem.price;