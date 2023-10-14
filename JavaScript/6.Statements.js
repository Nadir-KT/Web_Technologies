// if(condition){Task}
// if(condition){Task1} else{Task2}
// if(condition1){Task1} esle if(condition2){Task2} else{Task3}

var a = 'a'
var b = ''
if(a=='')
{
    console.log('a is empty')
}
else if(b=='b')
{
    console.log('b is not empty')
}
else
{
    console.log('b is empty')
}

//Conditional Statement
let x=10, y=5, z=8
if(x>y)
console.log("Largest no is "+x)
else
console.log("Larges no is "+y)

if(x>y && x>z)
console.log("Largest no is "+x)
else if(y>z)
console.log("Larges no is "+y)
else
console.log("Larges no is "+z)

//nested if
if(1)
{
    if(1)
    {
        console.log("Nested if")
    }
}