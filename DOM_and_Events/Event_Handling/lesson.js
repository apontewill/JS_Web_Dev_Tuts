"use strict";
// INTRO 
var incCount = 0;
var decCount = 0;
window.onload = function(){
    var incButton = document.getElementById("incButton");
    var decButton = document.getElementById("decButton");
    var statusButton = document.getElementById("statusButton");
    decButton.onclick = countDec;
    incButton.onclick = function(){
        incCount++;
        var incCountMessage = document.getElementById("incCount");
        incCountMessage.innerHTML = "Increment counter = "+ incCount;
    }
    var incDecValue = function(){
        alert("incDecValue ! Incremented value count = " + incCount + " , Decremented value count = " + decCount);
    }
    statusButton.addEventListener("click", incDecValue);
}
function countDec(){
    decCount--;
    var decCountMessage = document.getElementById("decCount");
    decCountMessage.innerHTML = "Decrement counter = " + decCount;
}