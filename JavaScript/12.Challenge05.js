//1) Using for loop print an output as mentioned below: 1 3 5 7 9
for(var i = 1; i < 10; i += 2)
{
    console.log(i)
} 
//2) Using for loop and if statement print an output as follows: 1 3 5 7 9 11 
for(var i = 1; i < 10; i += 2)
{
    console.log(i)
    if(i==9)
    {
    console.log(11)
    }
} 
//3) Declare an object like this const object = { a: 1, b: 2, c: 3 }; and print 2 outputs as mentioned using for in loop.
//You have to use two for in loops. a: 1 b: 2 c: 3 and  1 2 3
const object = { a: 1, b: 2, c: 3 };

var text
var value
var data = ''

for(var key in object)
{
    text = key
    value = object[text]
    console.log(text,': ',value)
}
for(var key in object)
{
    text = key
    value = object[text]
    console.log(value)
}