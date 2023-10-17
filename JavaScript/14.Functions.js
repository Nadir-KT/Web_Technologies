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