"use strict";

class Vehicle{
    constructor(make, model, price){
        this.make = make;
        this.model = model;
        this.price = price;
    }
}

let myCar = new Vehicle("Volkswagen", "GTI", 29000);
// Create deep copy of myCar
let yourCar = JSON.parse(JSON.stringify(myCar));
let herCar = {...myCar};
let hisCar = Object.create(myCar);
// True
console.log("Is myCar a Vehicle?" , myCar instanceof Vehicle);
// False
console.log("Is yourCar a Vehicle?" , yourCar instanceof Vehicle);
// False
console.log("Is herCar a Vehicle?" , herCar instanceof Vehicle);
// True
console.log("Is hisCar a Vehicle?" , hisCar instanceof Vehicle);
// All are type object
console.log("Type of myCar", typeof myCar);
console.log("Type of yourCar", typeof yourCar);
console.log("Type of herCar", typeof herCar);
console.log("Type of hisCar", typeof hisCar);

// Inheritance
class Motorcycle extends Vehicle{
    constructor(make, model, price, seatHeight){
        super(make,model,price);
        this.seatHeight = seatHeight;
    }
}

let myBike = new Motorcycle("Ducati", "Monster", 10000);
// Both true
console.log("Is myBike a Motorcycle?", myBike instanceof Motorcycle);
console.log("Is myBike a Vehicle?", myBike instanceof Vehicle);
