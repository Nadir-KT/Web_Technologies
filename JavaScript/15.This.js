let laptop={
    cpu:'M2',
    ram:16,
    brand:'Apple',
    compare2:function(arg){
        if(this.brand<arg.brand)
        {
            console.log(laptop)
        }
        else
        {
            console.log(laptop2)
        }
    },
    fun:function(){
        console.log(laptop.cpu)
        console.log(this.brand) //this keyword = object
    }
}
console.log(laptop)
laptop.fun() //calling function inside object

let laptop2={
    cpu:'Snapdragon',
    ram:16,
    brand:'Dell',
    fun:function(){
        console.log(laptop2.cpu)
        console.log(this.brand) //this keyword = object
    }
}
 if(laptop.cpu>laptop2.cpu)
 {
    console.log(laptop)
 }
 else
 {
    console.log(laptop2)
 }

 laptop2.fun() //calling function inside object

 function compare(laptop,laptop2){
    if(laptop.cpu>laptop2.cpu)
    {
       console.log(laptop)
    }
    else
    {
       console.log(laptop2)
    }
 }

 compare(laptop,laptop2)
 laptop.compare2(laptop2)
 fun()