"use strict";

console.log("Is this == window?", this == window);
console.log("What is this?", this);

var age = 35;
console.log("window.age", window.age);
console.log("this.age", this.age);

this.age = 55;
console.log("window.age", window.age);
console.log("this.age", this.age);

let someFunction = () => this;
console.log("this return from a function", someFunction());

let myCar = {
    make : "Volvo",
    model : "S60",
    price : 42000,
    printDetails(){
        console.log(`Make : ${this.make}\nModel : ${this.model}\nPrice : $${this.price}`);
    },
    engine : {
        cylinders : 4,
        displacement : 2000,
        horsepower : 250,
        printDetails(){
            console.log(`Displacement : ${this.displacement}cc\nHorsepower: ${this.horsepower}bhp`);
        }
    }
};
console.log("The fields of myCar");
myCar.printDetails();
console.log("Engine details");
myCar.engine.printDetails();
// Writing multiple printDetails is inefficient
// BEGIN LINKING FUNCTIONS TO OBJECTS VIDEO
myCar = {    
    make : "Volvo",
    model : "S60",
    price : 42000,
    engine : {
        cylinders : 4,
        displacement : 2000,
        horsepower : 250,
    }
};

function printCarDetails(){
    console.log(`Make : ${this.make}\nModel : ${this.model}\nPrice : $${this.price}`);
}
function printEngineDetails(){
    console.log(`Displacement : ${this.displacement}cc\nHorsepower: ${this.horsepower}bhp`);
}
// How do we link the above functions to our myCar object?
console.log("Car details: \n");
// .call() function
printCarDetails.call(myCar);
console.log("Engine detais: \n");
printEngineDetails.call(myCar);

