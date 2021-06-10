"use strict";
function validateForm(){
    var uname = document.forms["myForm"]["uname"];
    var age = document.forms["myForm"]["age"];
    var residentStatus = document.forms["myForm"]["residency"];
    var accountType = document.querySelectorAll("input[name=acctype]:checked");
    var nationality = document.forms["myForm"]["nationality"];
    // Regex to ensure uname only contains characters
    var regxName = /^([a-zA-Z]+)$/;
    if (uname.value.length < 6){
        alert("Username must be atlest 6 chars");
        uname.focus();
        return false;
    }
    if(!regxName.test(uname.value)){
        uname.style.border = "solid 2px green";
        document.getElementById('unameLabel').innerHTML = 'The name can only have alphabetical characters';
        document.getElementById('unameLabel').style.visibility = 'visible';
        return false;
    }
    else{
        uname.style.border = "solid 2px green";
        document.getElementById('unameLabel').innerHTML = 'The name is valid';
        document.getElementById('unameLabel').style.color = 'green';
        document.getElementById('unameLabel').style.visibility = 'visible';
    }
    if(age.value <18){
        alert("You must be 18 to open account");
        return false;
    }
    if(accountType.length == 0){
        document.querySelectorAll('input[name=acctype]')[1].checked = true
    }
    confirm("Do you want to submit the form?");
    // else{
    //     var selectedAccounts = [];
    //     for (let i=0; i < accountType.length; i++){
    //         selectedAccounts.push(accountType[i].value);
    //     }
    //     var alertMsg = `Form:\nUsername: ${uname}\nAge: ${age}\nResident status: ${residentStatus}\nAccounts selected: ${selectedAccounts}\nNationality index: ${nationality}`;
        
    //     // Logging Form Inputs to the Console
    //     console.log("Supplied details:");
    //     console.log("Username : ", uname);
    //     console.log("Age :", age);
    //     console.log("Resident status : ", residentStatus);
        
    //     alert(alertMsg);
    //} 
    return true;
}