// Arithmetic Operators
var a = 99
var b = 51
var add = a+b 
console.log("Addition =",add)
var x = 101
var y = 49
var sub = y-x 
console.log("Subtraction =",sub)
var mul = x*y 
console.log("Multiplication =",mul)
var div = a/b 
console.log("Division =",div)
let modulus=a%b
console.log("Remainder =",modulus)
let b1=true //1 type coercion
let b2=true //1 type coercion
let boolean=b1+b2
console.log("type coercion =",boolean)
let infinite=a/0
console.log("Infinite =",infinite)
let nan=b/'nano'
console.log("Not a Number =",nan)
let post_increment=a++
console.log("Post Increment =",post_increment)
let pre_increment=++a
console.log("Pre Increment =",pre_increment)
var post_decrement = x--
console.log("Post Decrement =",post_decrement,"Pre Decrement =",x)
var pre_decrement = --x
console.log("Pre Decrement =",pre_decrement)
var String1 = 'Java'
var String2 = 'Script'
var String0 = String1+String2 // String Addition (Concantination)
console.log("Concantination =",String0)
var A = 100
var B = 50
var C = B-A
console.log(C)
var D = C++
console.log(D)
var E = ++C
console.log(E)
var F = C++
console.log(F)
var G = C
console.log(G)
// Logical Operators
let u=4,v=7,w=6
console.log("AND =",u<v&&v<w) //AND
let res=(u<v||v<w) //OR
console.log("OR =",res)
console.log("NOT =",!res) //NOT
// Comparison Operators
let no=6;
if(no%2===0)
console.log("Comparison = Even")
else
console.log("Comparison = Odd")
// Ternary Operators
let ter=no%2===0?"True":"False"
console.log("Even = ",ter)
// Bitwise Operators

// Assignment Operators

// Relational Operators
console.log(5>6)//number---number//value
console.log(6>=6)
console.log("Pen"<"Book")//ASCII value of P is greater than B
console.log("Pen">"Pen")
console.log("Pen">="Pen")
console.log("Pen"<"Pencil")//string---string//ASCII (or) Length
console.log("2">1) //2>1//type coercion
console.log("Book">=1)//string---number//false
console.log("Book"<=1)
console.log("5"==5)//compare value only
console.log("5"===5)//Strict Equality Operator//compare value & type
console.log(true==true)
let X=""
console.log(Boolean(X))//false
console.log(X==null)
console.log(typeof X)
console.log(false==false)
let Y="JS"
console.log(Boolean(Y))//true
console.log(X==false)//true
console.log(X===false)//false
/*var bool = a==b
console.log(bool)
var b = '100'
var bool = a==b
console.log(bool)
var bool = a!==b
console.log(bool)
var bool = a>b
console.log(bool)*/