// while(condition) {Task}

var i = 0
var n = 5

while(i<=n)
{
    console.log(i)
    i++
}

var array = ['Java','Script','Python','Anaconda']

var length = array.length

console.log('length of array =', length)

var i = 0

while(i<length)
{
    console.log(array[i])
    i++
}

// do{Task} while(condition)

var i = 0

do
{
    console.log(i)
    i++
}
while(i<5)

var a = [1,2,3,4,5,6,7,8,9,0]

var i = 0

var length = a.length

do
{
    var A = a[i]+length
    console.log(A,i,length)
    i++
}
while(i<length)

// for(initialization; condition; increment/decrement) {Task}

var count

for (count=0; count<=10; count++)
{
    var A = count
    console.log('current count :',A)
    console.log('current count : '+A) // concantination 
}

var A = [1,2,3,4,5,6,7,8,9,0]

var length = A.length

for(var count=0; count<length; count++)
{
    var B = A[count]
    console.log(B,length)
}

// for in

var name = {First: 'Java', Last: 'Script v', Version: 23}

var text
var value
var data = ''

for(var key in name)
{
    text = key
    console.log(text)
    value = name[text]
    data += value
    console.log(data)
}

console.log(data)