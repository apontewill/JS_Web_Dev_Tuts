"use strict";
// CODE NOT WORKING
window.onload = function(){
    time.onclick = displayDate;
    convert.onchange = convertIntoUppercase;
    convert.onfocus = onFocus;
    mouse.onmouseover = mouseOver;
    mouse.onmouseout = mouseOut;
    image.onmousedown = wifiOn;
    image.onmouseup = wifiOff;
}

function displayDate(){
    currenttime.innerHTML = Date();
}

function convertIntoUppercase(){
    var uppercase = document.getElementById("convert");
    uppercase.value = uppercase.value.toUpperCase();
}

function onFocus(){
    var focus = document.getElementById("convert");
    focus.style.background = "yellow";
}
// BEGIN EVENT HANDLERS FOR MOUSE EVENTS
function mouseOver(){
    var mouseover = document.getElementByID("mouse");
    mouseover.style.backgroundColor = "green";
    mouseover.innerHTML = "Thank You";
}
function mouseOut(){
    var mouseout = document.getElementByID("mouse");
    mouseout.style.backgroundColor ="cyan";
    mouseout.innerHTML = "Mouse over me..!";
}
function wifiOn(){
    var wifi_on = document.getElementByID("image");
    wifi_on.src = "images/wifiON.png";
}
function wifiOff(){
    var wifi_off = document.getElementByID("image");
    wifi_off.src = "images/wifiOFF.png";
}