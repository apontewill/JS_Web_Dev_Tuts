document.getElementById("num").innerHTML = 30;
document.getElementById("text").innerHTML = "Name: William";

var a;
a = 10;
var b, c;
b = c = 20;

x = a + 30;

console.log("a : " + a);
console.log("b : " + b);
console.log("c : " + c);
console.log("x : " + x);

y = b + c;
console.log("y : "+ y);

StudentName = "Brianna";
studentName = "Jonh";
student_name = "David";

console.log("Upper Camel Case : " + StudentName);
console.log("Lower Camel Case : " + studentName);
console.log('Underscore : ' + student_name);

singleQuoteString = 'Declared with single quotes';
backtickString = `Back ticks`;

console.log("The singleQuoteString : %s", singleQuoteString);
// Only works with backtick (``) Strings works like f'' from python
console.log(`The backtickString : ${backtickString}`);