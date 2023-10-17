//Default
function Default(){
    console.log('function')
}
Default()
Default()
//Arguiments
function Arguiments(Arg){
    console.log('function '+Arg)
}
let Arg='Arguing'
Arguiments(Arg)
function Arguiments1(x){
    console.log(`function ${x}`)
}
Arguiments1(Arg)
//Return
function Return(){
    return 'Returned'
}
let Ret=Return()
console.log(Ret)
//Arguiments+Return
function ArgRet(y){
    return y
}
let y='ArguimentsReturned'
let Ret1=ArgRet(y)
console.log(Ret1)
//Local & Global Variable
function wish(user)//Local Variable
{
    return `Hello ${user}`
}
let user1='User' //Global Variable, Hoisting
let result=wish(user1)
console.log(result)

function add(num1,num2,num3,num4=0)//Parameters
{
    return num1+num2+num3+num4
}
let out=add(5,6,7,8)//Arguiments
console.log(out)

let sum=function sub(num1,num2)
{
    return num1-num2
}
console.log(sum)
let sum1=sum
let sum2=sum1(10,5)
console.log(sum2)

let fun=function(num1,num2)
{
    console.log("Hello World")
    return num1+num2
}
console.log(fun(5,5))
//Arrow Function
let arr=()=>
{
    console.log("Hello World")
    return 0
}
console.log(arr())

let arr1=(num1,num2)=>
{
    console.log("Hello World")
    return num1+num2
}
console.log(arr1(6,7))
console.log(arr1)

let arr2=(num1,num2)=>console.log(num1+num2)
arr2(6,7)
