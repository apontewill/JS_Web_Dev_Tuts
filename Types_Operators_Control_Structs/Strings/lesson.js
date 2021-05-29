"use strict";

// Using quotes "" in string put a backslash in front \"quotes\"

let multi_str =
`           This is a
            string which
            spans multiple lines`;
console.log("Multi-line str\n", multi_str);

let empName = "Jane Chang";

console.log("Length of string : " + empName.length);
console.log("Index of h is : " + empName.indexOf("h"));
console.log("'Ch' occurs at position : " + empName.search("Ch"));

var line = 'fundamentals of JavaScript';

console.log("OG line", line);
console.log("Slice (1,12):",line.slice(1,12));
console.log("Slice (-23, -15):", line.slice(-23,-15));
console.log("Slice (13)", line.slice(13));

console.log("Replacing JavaScript with Web Programming",
            line.replace("JavaScript", "Web Programming"));
            // non case sensisitive
console.log(line.replace(/javascript/i,"Python"));