document.body.bgColor="yellow";
// This is your single-line comment
document.write("Welcome to document.write");
document.write ("<br>");
var x=15;
var y=30;
var z=x+y;
//adding the value of variables x and y
document.write(z);//add 15 and 30
document.write ("<br>");
/* This is your multi-line comment.
Browser won’t display it */
document.write("Programming Language: JavaScript");
/* alert(`Your browser version is reported as ${navigator.appVersion}`); */
document.write ("<br>");
document.write(`Your browser version is reported as ${navigator.appVersion}`); //to find the client OS version
document.write ("<br>");
document.write("This is \a program");
document.write ("<br>");
document.write("I m a \"good\" boy");
document.write ("<br>");
document.write(`height of the client’s screen is ${screen.availHeight}`);
document.write ("<br>");
document.write(`width of the client’s screen is ${screen.availWidth}`);
document.write ("<br>");
document.write(`bit depth of images on the client’s screen is ${screen.colorDepth}`);
document.write ("<br>");
document.write(`total height of the client’s screen is ${screen.height}`);
document.write ("<br>");
document.write(`total width of the client’s screen is ${screen.width}`);
document.write ("<br>");
var num1 = [0, 1, 2, 3, 4];
for (var i = 0; i < num1.length; i++) {
 document.write(num1[i]);
}
document.write ("<br>");
var arr1 = [1,2,3];
var arr2 = [4,5,6,7];
var mergedArrays = [arr1,arr2];
document.write(mergedArrays);
document.write ("<br>");
var emp = {firstName:"John", lastName:"Doe", age:50};
document.write(emp.firstName+" "+emp.lastName+" "+emp.age);
document.write ("<br>");
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};
document.write(person.firstName+" "+person.lastName+" "+person.age);
document.write ("<br>");
const person2 = {};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
document.write(person2.firstName+" "+person2.lastName+" "+person2.age);
document.write ("<br>");
const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
document.write(person3.firstName+" "+person3.lastName+" "+person3.age);
document.write ("<br>");
var date = new Date();
document.write (date);
document.write ("<br>");
var n = date.toISOString();
document.write (n);
document.write ("<br>");
document.write (typeof "John Doe") // Returns "string"
document.write ("<br>");
document.write (typeof 3.14) // Returns "number"
document.write ("<br>");
document.write (typeof true) // Returns "boolean"
document.write ("<br>");
document.write (typeof 234567890123456789012345678901234567890n) // Returns bigint
document.write ("<br>");
document.write (typeof undefined) // Returns "undefined"
document.write ("<br>");
document.write (typeof null) // Returns "object" (kind of a bug in JavaScript)
document.write ("<br>");
document.write (typeof Symbol('symbol')) // Returns Symbol