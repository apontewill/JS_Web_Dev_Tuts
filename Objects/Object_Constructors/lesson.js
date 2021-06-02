// Object constuctors are the blueprint of objects
// Similar to classes
"use strict";
// In comparison to Java think of this as the constructor of a class
function Car(make, model, price, engine){
    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
}
let s60Engine = {
    cylinders : 4,
    displacement : 2000,
    horsepower : 250
}

let myCar = new Car("Volvo", "S60", 42000, s60Engine);

console.group(`My car is a ${myCar.make} ${myCar.model}`);

let caymanEngine = {
    cylinders: 4,
    displacement: 2500,
    horsepower: 350
}

let porsche = new Car("Porsche", "718 Cayman", 100000, caymanEngine);
// These constructors we made only have fields lets make some with functions
function Car(make, model, price, engine){
    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
    this.details = function(){
        console.log(`Make : ${this.make}\nModel : ${this.model}\nPrice : $${this.price}`);
    }
    this.engine.details = function(){
        console.log(`Displacement : ${this.displacement}\nHorsepower : ${this.horsepower}`);
    };
};
// Can use class keyword as well but is under hood syntactically what we did above
class Vehicle{
    constructor(make, model, price, engine){
        this.make = make;
        this.model = model;
        this.price = price;
        this.engine = engine;
    }
    details = function(){
        console.log(`Make : ${this.make}\nModel : ${this.model}\nPrice : $${this.price}`);
    }
    engine_details = function(){
        console.log(`Displacement : ${this.engine.displacement}\nHorsepower : ${this.engine.horsepower}`);
    };
};

myCar = new Vehicle("Volvo", "s60", 42000, s60Engine);