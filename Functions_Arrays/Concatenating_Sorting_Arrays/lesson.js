"use strict";
let europeOffices = ['Bucharest', 'Prague', 'Rome'];
let africaOffices = ['Durban', 'Nariobi'];
let oceanOffices = ['Christchurch', 'Sydney'];

let southernOffices = africaOffices.concat(oceanOffices);

console.log("southernOffices : ", southernOffices);
console.log("africaOffices : ", africaOffices);
console.log('oceanOffices', oceanOffices);

let allOffices = africaOffices.concat(oceanOffices, europeOffices);

console.log("allOfcies: ", allOffices);

let sortedOffices = allOffices.sort();
console.log("sortedOffices",sortedOffices)
// INVOKING SORT SORTS OG ARRAY
// BOTH ARRAYS SORTED
// IF YOU WANT TO KEEP THE OG SORTING OF THE ARRAY MAKE A DEEP COPY AND SORT ON THAT
console.log("allOffices after sorting", allOffices);

console.log("Reverse sorting of allOffices", allOffices.reverse());

allOffices = africaOffices.concat(oceanOffices, europeOffices);

console.log("Sorted copy of allOffices using spread syntax : \n",[...allOffices].sort());

console.log("Sorted copy of allOffices using a slice copy : \n",allOffices.slice().sort());

console.log("allOfices after sorting", allOffices);

// SORTING USING NUMBERS
let numArray = [20,50,3,10,35];
console.log("Wont sort properly", numArray.slice().sort());
// will work
numArray.sort(function(a,b){return a-b});
console.log("Works", numArray);
// Reverse sort
numArray.sort(function(a,b){return b-a});
