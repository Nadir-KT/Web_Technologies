// 1) Print name of the day based on the value of the day variable by using the switch statement.
//  Use 2 variables day and dayname initialize day as the day which you wants to print. 
//  Use 7 switch cases to check day name. 

var day = 6
var dayname = ['Sunday','Monday','Tuesday','Wednessday','Thursday','Friday','Saturday']

switch (day)
{
    case 1 :
    console.log(dayname[0])
    break;
    case 2 :
    console.log(dayname[1])
    break;
    case 3 :
    console.log(dayname[2])
    break;
    case 4 :
    console.log(dayname[3])
    break;
    case 5 :
    console.log(dayname[4])
    break;
    case 6 :
    console.log(dayname[5])
    break;
    case 7 :
    console.log(dayname[6])
    break;
    default :
    console.log('code executed')
}

// 2) Find the usage of Date().getDay() and print the current day using switch statement.

switch (new Date().getDay())
{
    case 0 :
    console.log(dayname[0])
    break;
    case 1 :
    console.log(dayname[1])
    break;
    case 2 :
    console.log(dayname[2])
    break;
    case 3 :
    console.log(dayname[3])
    break;
    case 4 :
    console.log(dayname[4])
    break;
    case 5 :
    console.log(dayname[5])
    break;
    case 6 :
    console.log(dayname[6])
    break;
    default :
    console.log('code executed')
}

// usage of  new Date().getDay()

var a = Date() // Date
console.log(a)
var b = new Date() // Date for .getDay()
console.log(b)
var c = b.getDay() // Day
console.log(c)
var d = new Date().getDay() // Day
console.log(d)
var e = dayname[b.getDay()] // dayname
console.log(e)
var f = dayname[new Date().getDay()] // dayname
console.log(f)