"use strict";

window.onload = function(){
    var openButton = document.getElementById("openButton");
    var closeButton = document.getElementById("closeButton");
    
    var newWindow = null;

    openButton.onclick = function(){
        newWindow = window.open("https://skillsoft.com/");
    }

    closeButton.onclick = function(){
        if(newWindow != null){
            newWindow.close();
        }
    }

    historyButton.onclick = function(){
        var browserHistory = document.getElementById("history");
        browserHistory.innerHTML = "Your browser window history had " + window.history.length + " entries!";
    }
    wikipediaButton.onclick = function(){
        window.location = "https://en.wikipedia.org/";
    }
}