// Ajax short for Asynchronous JavaScript and XML
// Is used by client-side applications to fetch data from the server
// in a asynchronous matter
"use strict";
const imgURL = "https://images.pexels.com/photos/5838242/pexels-photo-5838242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

let fetchImage = async () => {
    var myImageResponse = await fetch(imgURL);
    console.log("Image response: \n", myImageResponse.blob());
}

function ajaxRequest(){
    var xmlRequest = new XMLHttpRequest();

    xmlRequest.open("GET", imgURL);
    xmlRequest.send();
    xmlRequest.onload = function(e){
        console.log(xmlRequest.response);
    }
}