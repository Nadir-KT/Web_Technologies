// 1) while Initialize a variable = 1 and check that less than 10 using while loop and increment that value with +=2 and 
// print a out put as follows: 1 3 5 7 9

var variable = 1
while(variable<10)
{
    console.log(variable)
    variable += 2
}

// 2) do while  print 12345 in single line using do while statement. 

var i = 1
var data = ''
do
{
    data += i
    i++
}
while(i<6)
console.log(data)