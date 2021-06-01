"use strict";

let dogBreeds = ['Labrador','Beagle','Golden Retriever','Doberman','German Shepard','Boxer'];

console.log("OG contents of dogBreeds: \n", dogBreeds);
// 3 <- the index you want to insert your data in
// 0 <- the number of elements you want to remove while inserting data
dogBreeds.splice(3,0,'Poodle','Dalmatian');

console.log('After dogBreeds.splice(3,0,Poodle,Dalmatian)', dogBreeds);

// Insert at index 1 and remove two elements
dogBreeds.splice(1,2, 'Indi');

console.log("dogBreeds after splice(1,2, 'Indi': \n", dogBreeds);

// COPYING ARRAY WITH SLICE()
// will copy the array from position i to array.length
let sliceOfDogBreeds = dogBreeds.slice(3);
console.log("dogBreeds.slice(3) = \n", sliceOfDogBreeds);
// gets index 3, 4 (NOT 5)
sliceOfDogBreeds = dogBreeds.slice(3, 5);
console.log("sliceOfDogBreeds = dogBreeds.slice(3, 5)", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(-3,-1);
console.log("sliceOfDogBreeds = dogBreeds.slice(-3,-1)");