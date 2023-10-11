let x
console.log (x,typeof x)
x=10
console.log (x,typeof x)
x=""
console.log (x,typeof x)
x="123"
console.log (x,typeof x)
x=Number(x) //Explicit Conversion
console.log (x,typeof x)
x=String(x)
console.log (x,typeof x)
x=10
console.log (x,typeof x)
x=x+""
console.log (x,typeof x)
x=x+4//Concatination
console.log (x,typeof x)
x=x-4//Coersion
console.log (x,typeof x)
x=!x//Boolean Conversion//Logical Not
console.log (x,typeof x)
x=!"string"//Boolean Conversion
console.log (x,typeof x)
x=0
console.log (x,Boolean(x))//Boolean Conversion//0=false
x=6
console.log (x,Boolean(x))//Boolean Conversion//6=true
x=-6
console.log (x,Boolean(x))//Boolean Conversion//-6=true
x=" "
console.log (x,Boolean(x))//Boolean Conversion//space/string=true
x=""
console.log (x,Boolean(x))//Boolean Conversion//empty string=false
x=null
console.log (x,Boolean(x))//Boolean Conversion//null=false
x=undefined
console.log (x,Boolean(x))//Boolean Conversion//undefined=false
let y="123 abc"
console.log (y,typeof y)
y=Number("123 abc")
console.log (y,typeof y)
y=parseInt("123 abc")
console.log (y,typeof y)
y=parseInt("abc 123")
console.log (y,typeof y)
y=parseInt("178 abc 123")
console.log (y,typeof y)