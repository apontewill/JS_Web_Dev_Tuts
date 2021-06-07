"use strict";
// ACCESSING THE CHILD NODES OF THE DOM
var jsDescription = document.getElementById('jsdescription');
console.log("Accessing text using innerHTML for jsdescription: ", jsDescription.innerHTML);

console.log("Accessing childNodes: ", jsDescription.childNodes);
console.log("First node child : ", jsDescription.firstChild.nodeValue);
console.log("Last node child : ", jsDescription.lastChild.nodeValue);
// Accessing middle child <i> tag within jsdescription
//console.log("Accessing childNodes[1].firstChild.nodeValue", jsDescription.childNodes[1].firstChild.nodeValue);

var jstitle = document.getElementById("jstitle");
// nodeName returns the tag
// this will return P
console.log("jstitle.nodeName : ", jstitle.nodeName);
// #document
console.log("document.nodeName = ", document.nodeName);

console.log("The nodeTypes for the different nodes:")

console.log("Element node (id=jstitle):", jstitle.firstChild.nodeType);

// ADDING NODES TO THE DOM
var unorderedList = document.getElementById("unOrder");

var listItem1 = document.createElement('li');

console.log("Creating new elements")
console.log("The first li element: ", listItem1);

listItem1.textContent = "JavaScript";
console.log("The first li element with textContent: ", listItem1);
// Create a new list element
var listItem2 = document.createElement('li');
// Create a new text node
var text2 = document.createTextNode("Java");
// Append the text node as a child to the list element
listItem2.appendChild(text2);
console.log("The second li element: ", listItem2);
unorderedList.prepend(listItem1);
unorderedList.append(listItem2);

// Adding a header element to the DOM
var h4 = document.createElement('h4');
h4.textContent = "This is a list of useful programming languages:";
// Takes 2 args 1st element to be inserted into DOM then an element to be inserted before
document.body.insertBefore(h4, unorderedList);
// Styling the header element
h4.style.backgroundColor = "cyan";

// Adding an element after an element. There is no document.body.insertAfter(x,y) function
var h3 = document.createElement('h3');
h3.textContent = "This marks the end of the unorded list";

document.body.insertBefore(h3, unorderedList.nextSibling);
// REMOVING AND REPLACING NODES IN DOM
jstitle = document.getElementById('jstitle');
jstitle.remove();

var listItem = unorderedList.firstElementChild;
unorderedList.removeChild(listItem);
// REPLACING
var listItem3 = document.createElement("li");
listItem3.textContent = "Go";
unorderedList.replaceChild(listItem3, listItem2);
