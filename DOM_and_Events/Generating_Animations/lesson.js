"use strict";
// To produce some kind of animation you will need to move the shape periodically
function animation(){
    var dot = document.getElementById("circle");
    var loc = 450; // will track the location of our circle on the page
    // To perform any operation periodically use setInterval(function(), frequency*in milliseconds)
    var tie = setInterval(frame, 10);
    function frame() {
        if(loc == 0){
            clearInterval(time);
        } else{
            loc--;
            dot.style.top = loc +"px";
            dot.style.right = loc + "px";
        }
    }
}