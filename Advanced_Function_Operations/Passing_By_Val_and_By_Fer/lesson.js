"use strict";

function passByValueAndReference(){
    // Primitive types like strings are passed by value
    let name = "Tyson";
    // Object types are passed by reference
    let person = {name: "Myra", city: "Austin"};

    console.log("Initial value of name = ", name);
    console.log("Initial value of person = ", person);

    modifyData(name, person);

    console.log("final value of name = ", name);
    console.log("final value of person = ", person);
}

function modifyData(primitiveType, objectType){
    primitiveType = "Victor";
    objectType.name = "Olivia";

    console.log("Updated primitiveType: ", primitiveType);
    console.log("Updated objectType: ", objectType);
}

passByValueAndReference();

