var a = 30
var b = 50

var c = (a+b)/2

switch (c)
{
    case 10 :
    console.log('10 is the right answer')
    break;
    case 20 :
    console.log('20 is the right answer')
    break;
    case 30 :
    console.log('30 is the right answer')
    break;
    case 40 :
    console.log('40 is the right answer')
    break;
    default :
    console.log('code executed')
}

var x = 'Java'
var y = 'Script'

var z = x+y+a
switch (z)
{
    case 'C++' :
    console.log('C++')
    break;
    case 'Java' :
    console.log('Java')
    break;
    case 'Python' :
    console.log('Python')
    break;
    case 'javascript' :
    console.log('javascript')
    break;
    case 'JavaScript' :
    console.log('JavaScript')
    break;
    default :
    console.log('code executed',z)
}

//Switch Statement
let w="Monday"
switch(w)
{
    case "Sunday":
        console.log("Holliday")
        break;
    case "Monday":
        console.log("Working")
        break;
    default:
        console.log("Invalid")
        break;
}

//Template Literal
let g=4, h=2
let result=g+h
console.log("The addition of "+g+" and "+h+" is "+result)
console.log(`The addition of ${g} and ${h} is ${result}`)