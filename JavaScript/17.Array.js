// Array by literal
var a = ["Apple","Mango","Banana"]
console.log(a)
// Array by instances
var b = new Array()
b[2]='Cucumber'
b[1]='Tomato'
b[0]='Cabbage'
console.log(b)

// function
function add()
{
    var a = 100
    var b = 200
    var c = a+b
    console.log(c)
}
add()

function addition(x,y)
{
    var z = x+y
    console.log(z)
}
addition(2,6)
// array.reduce
var array1 = [1,2,3,4]
var reducer = (PreviousValue, CurrentValue) => PreviousValue + CurrentValue
var sum = array1.reduce(reducer)
console.log(sum)
// array.slice
var array2 = ['Banana','Orange','Lemon','Apple','Mango']
var citrus = array2.slice(1,4) // 1,4 = index 1 to 3
console.log(citrus)
var citrus = array2.slice(0,5) // 0,5 = index 0 to 4
console.log(citrus)
// array.includes
var check = array2.includes('Apple')
console.log(check)
// array.find
var array3 = [23, 7, 8, 358, 90]
var finditem = array3.find(element => element < 10)
console.log(finditem)
// array.indexOf
var findindex = array3.indexOf(358)
console.log(findindex)
// array.push
var array4 = ['Banana','Orange','Lemon','Apple','Mango']
array4.push('kiwi')
console.log(array4)
// array.pop
var array5 = ['Banana','Orange','Lemon','Apple','Mango']
array5.pop('kiwi')
console.log(array5)
// array.length // array = name of array
var array6 = ['Banana','Orange','Lemon','Apple','Mango']
findlength = array6.length
console.log(findlength)
// Array.from // Array = crate array
var string = 'tomato'
var array7 = Array.from(string)
console.log(array7)
// array.concat
var array8 = ['Banana','Orange']
var array9 = ['Apple','Mango']
var array10 = array9.concat(array8)
console.log(array10)
var array11 = [1,2,3,4,5]
var array12 = array9.concat(array11)
console.log(array12)