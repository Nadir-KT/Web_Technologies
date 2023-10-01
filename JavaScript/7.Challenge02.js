/* 1) if statement
      Print the output as follows with the condition.
      Check 2 integers and print its an integer.
      Check 2 strings which is equal or not. */
var a = 12
var b = 47
if(Number.isInteger(a) && Number.isInteger(b))
{
    console.log('Integer')
}
var x = 'Java'
var y = 'Script'
if(x === y)
{
    console.log('Equal')
}
if(x !== y)
{
    console.log('Not equal')
}
// 2) if else statement
//    Declare a variable if it is string print it is string else print it is integer.
if (typeof x === 'string') {
    console.log('It is string');
}
else {
    console.log('It is integer');
}
// 3) if else statement
//    Create your own program using if else if statement.
if(a=='')
{
    console.log('if condition passed')
}
else if(x !== y)
{
    console.log('else if condition passed')
}