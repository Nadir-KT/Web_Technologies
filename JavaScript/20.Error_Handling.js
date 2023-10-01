// Syntax Error
// Runtime Error
// Logical Error
var x = '16'
try // Try
{
    if(x == '')
    throw 'Empty' // Throw
    if(isNaN(x))
    throw 'Not a Number' // Throw
    x=Number(x)
    if(x<5)
    throw 'Too low' // Throw
    if(x<5 && x<=10)
    throw 'Perfect' // Throw
    if(x>10)
    throw 'Too high' // Throw
}
catch(output) // Catch
{
    console.log(output)
}
// Finally