//Primitives:Number,String,Boolean,Null,Undefined,Symbol
var Number1 = 7.1; //Number
var Number2 = 100_00_11_3; //Number
var LongInt = 21312312312412412412412412412421412n; // n is required for BigInt
var Hex = 0xf
var Number3 = -5/0
var Number4 = 5/'Tomato'
console.log(typeof Number) // printf
console.log(Number1) // printf
console.log(Number1.MAX_VALUE) // printf
console.log(Number2) // printf
console.log(Number3) // printf
console.log(Number4) // NaN: Not a Number
console.log(LongInt) // printf
console.log(LongInt+2n) // n is required for BigInt
console.log(Hex) // n is required for BigInt

var String1 = 'Tomato' //String = Collection of letters
var String2 = "Sauce" //String = Collection of letters
console.log(typeof String) // printf
console.log(String1) // printf
console.log(String1+50) // printf
console.log(String1+String2) // concatination

var Boolean = 7>10; // Boolean = True (or) False
console.log(typeof Boolean) // printf
console.log(Boolean) // printf

var Null = null; // null = empty
console.log(typeof Null) // printf
console.log(Null) // printf

var Undefined0;
let Undefined1=undefined
console.log(typeof Undefined0) // printf
console.log(Undefined0) // printf
console.log(Undefined1) // printf