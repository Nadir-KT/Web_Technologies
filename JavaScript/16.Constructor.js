function fun(Para1,Para2)
{
    console.log(Para1)
    console.log(Para2)
}
let def= fun('Arg1','Arg2')

function fun2(Para1,Para2)
{
    this.Param1=Para1
    this.Param2=Para2

    this.infun=function()
    {
        console.log("Anony Fun")
    }
}
let cons=new fun2('Arg1','Arg2')
cons.Param1='Arg5'
let cons2=new fun2('Arg3','Arg4')

console.log(cons)
console.log(cons2)
cons.infun()