// 1) Create an object of 4 pairs of key and value by object literal and using instance of Object.
// Object by literal
var object1 = {key: 'value', text: '100', key3: 100, key4: 'No Value'}
console.log(object1)
// Object by instances
var object2 = new Object()
object2.key = 'value'
object2.text = '100'
object2.key3 = 100
object2.key4 = 'No Value'
console.log(object2)
// 2) Using if and else codition print true and false condtions of boolean statement.
var a = 10
var b = 5 > 10
var c = false
var d = a > b
var z = new Boolean(10 > 5)

if (typeof a === 'number' && typeof c === 'boolean' && typeof d === 'boolean' && typeof z === 'object') 
{
    console.log(z);
}
else 
{
    console.log(b);
}