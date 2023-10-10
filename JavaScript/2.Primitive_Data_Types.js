//Primitives:Number,String,Boolean,Null,Undefined,Symbol
var Number1 = 7.1; //Number1
console.log(typeof Number1) // printf
console.log(Number1) // printf
console.log(Number1.MAX_VALUE) // MAX_VALUE
var Number2 = 100_00_11_3; //Number2
console.log(Number2) // printf
var LongInt = 21312312312412412412412412412421412n; // n is required for BigInt
console.log(LongInt) // printf
console.log(LongInt+2n) // n is required for BigInt
var Hex = 0xf
console.log(Hex) // n is required for BigInt
var Infinite = -5/0
console.log(Infinite) // printf
var Number4 = 5/'Tomato'
console.log(Number4) // NaN: Not a Number

var String1 = 'Tomato' //String = Collection of letters
var String2 = "Sauce" //String = Collection of letters
console.log(typeof String1) // printf
console.log(String1) // printf
console.log(String1+50) // Concantination
console.log(String1+String2) // Concantination

var Boolean0 = 7>10; // Boolean = True (or) False
console.log(typeof Boolean0) // printf
console.log(Boolean0) // printf

var Null = null; // null = empty
console.log(typeof Null) // printf
console.log(Null) // printf

var Undefined0;
let Undefined1=undefined
console.log(typeof Undefined0) // printf
console.log(Undefined0) // printf
console.log(Undefined1) // printf