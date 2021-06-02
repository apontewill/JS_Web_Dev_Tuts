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

console.log("My car: ", myCar);
// This yourCar object points to the same place in memory as myCar
// Shallow Copy
var yourCar = myCar;

// Object.assign() params: (First param is the target object, Second param is the source object)
// copies the fields from the source to the target
// This does not create a completly independent object
// All top level fields are independent however nested fields are not
var hisCar = Object.assign({}, myCar);

hisCar.coler = "Red";
hisCar.seats.color = "Neon Green";
// you can see how its not a full deep copy, both cars seat colors were changed to Neon Green
console.log("The effect of Object.assign():");
console.log("His car: ", hisCar);
console.log("My car: ", myCar);

// This does the same type of copy as Object.assign()
// You put in {} to ensure contents of myCar are stored in an object
var herCar = {...myCar};
herCar.seats.color = "Black";
console.log("The effect of spread syntax:");
console.log("Her car: ", herCar);
console.log("My car: ", myCar);

// Deep Copy
myCar = {
    make: "Volvo",
    model: "S60",
    price: 42000,
    color: "Grey",
    seats:{
        material: "Leather",
        color: "Brown"
    }
}
// JSON.stringify() converts the fields in the to strings
// JSON.parse() converts to an Object
// This will not copy functions and running this line will create a copy without the functions
yourCar = JSON.parse(JSON.stringify(myCar));

yourCar.tyres = "Pirelli";
yourCar.seats.color = " Purple";

console.log("The effect of JSON.stringify() and JSON.parse():");
console.log("Her car: ", herCar);
console.log("My car: ", myCar);
