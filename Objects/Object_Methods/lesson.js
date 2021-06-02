// Different types of object methods like keys, values, assign, freeze
"use strict";

var myCar = {
    make: "Volvo",
    model: "S60",
    price: 42000,
    color: "Grey",
    seats:{
        material: "Leather",
        color: "Brown"
    }
}
// This will create a new object using myCar as a PROTOTYPE(will learn more about this later)
// Not a deep copy
var samsCar = Object.create(myCar);
// Returns array of object's keys
console.log("What are the Object's keys? ");
console.log(Object.keys(myCar));
// Returns array of object's values
console.log("What are the Object's values? ");
console.log(Object.values(myCar));
// Reutrns key value pair indivdually as an array within an array
// [[make:"Volvo"], [model:"S60"], ...]
console.log("What are the Object's entries: ");
console.log(Object.entries(myCar));
// Merge s60Engine to myCar object
let s60Engine = {
    cylinders:4,
    displacement: 2000,
    horsepower: 250
}
let yourCar = Object.assign(myCar, {engine: s60Engine});
// Freeze is used to prevent the unintentional modification of an object's top level fields
let herCar = Object.freeze(myCar);
// Freeze does not allow you to manipulate top level fields
//herCar.color = "Yellow";
// But allows manipulation of nested fields
herCar.seats.color = "Red"

console.log("the effect of Object.freeze(): ");
console.log("Her car: ", herCar);
console.log("My car: ", myCar);
// seal does not allow you to add top level fields but can add nested fields
let hisCar = Object.seal(myCar);
