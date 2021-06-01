"use strict";

let add;
// function sum(x,y){
//     add = x + y;
//     return add;
// }

// let addition = sum(1,2,3,4);
// Will  return only 1 + 2 not 1 + 2 + 3 + 4
//console.log(addition);
// REST PARAMS function
function sum(...nums){
    add = 0;
    for(var num of nums){
        add +=num;
    }
    return add;
}
addition = sum(1,2,3,4);
console.log(`Rest Parameters sum funcion: ${addition}`);

// What if you want to use rest params but want to have a specified param like a students name and all their courses
// Rest param can only be at the end of parameters and can only have one per function
function studentDetails(name, ...courses){
    console.log("Name of student is : " + name);

    let sub;
    for(sub = 0; sub <courses.length; sub++){
        console.log(course[sub]);
    }
}

studentDetails("Chris", "JavaScript","Python", "Scala");
