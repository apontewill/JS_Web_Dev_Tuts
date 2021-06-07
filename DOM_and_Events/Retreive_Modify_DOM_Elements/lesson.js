 "use strict";
// RETRIEVING FROM DOM
 var language = document.getElementById('jstitle');
 console.log("The contents of jstitle", language.innerHTML);

 var bTags = document.getElementsByTagName('b');
 console.log('b tags:\n', bTags);
 console.log("The first <b> tag", bTags[0].innerHTML);

 var pTags = document.getElementById('p');
 console.log("\nThe number of <p> tags: ", pTags.length);

 var jstext = document.getElementsByTagName('jstext');

 var jstextbTags = jstext.getElementById('b');

 console.log('\nListing the <b> tags in jstext', jstextbTags);

 // MODIFY DOM
var jsdesc = document.getElementsByClassName("jsdescription");
console.log('jsdesc of first element inner html', jsdesc[0].innerHTML);

var select = document.querySelectorAll("i.jsdescription");
console.log("\nUsing the CSS selector i.jsdescription", select[0].innerHTML);

var data = document.getElementById('jstitle');

console.log("\nModifying the innerHtml of an element:");
console.log("Old data : ", data.innerHTML);

var newData = data.innerHTML = "Programming with JS";
console.log("New data : ", newData);