// JavaScript Objects: Object, Number, Boolean, Array, Date, Math
// Object by literal
let abc ='name'
let Obj ={}
console.log(Obj, typeof(Obj))
var fruits = {name: 'Apple', prize: 100, 'second name': 'fruit' } // Object = {key1: value1, key2: value2, ....} // Key & Value pairs
console.log(fruits)
console.log(fruits.name)
console.log(fruits['name'])
console.log(fruits['second name'])
console.log(fruits[abc])
// Object by instances
var vegitables = new Object()
vegitables.name = 'cucumber'
vegitables.price = 250
vegitables.availability = 'in stock'
console.log(vegitables)

// JavaScript Number Objects
// Integer
var A = 150;
// Floating Point
var B = 8.9
// Exponent value
var n = 15e4
var x = 15E5
console.log(n)
console.log(x)
// Number object
var Z = new Number(55)
console.log(Z)
console.log(typeof(Z))