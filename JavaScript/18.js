//Set: Unique Elements, Removes duplicate values

let num=new Set("JavaScript");
console.log(num);

let num1=new Set();
num1.add("Java")
num1.add("Python")
num1.add("C/C++")
num1.add("Java")
num1.add("JavaScript")
console.log(num1);

num1.forEach(s=>{
    console.log(s);
})

console.log(num1.has("Java"));
console.log(num1.delete("Java"));
console.log(num1);

//Map: Key value pairs
let num2=new Map()
num2.set("Java","Script")
num2.set("C","C++")
num2.set("Python","OpenCV")
num2.set("C#",".NET")
console.log(num2);
console.log(num2.get("C#"));//get specific value based on key
console.log(num2.set("Java","React"));

num2.forEach((v,k)=>{
    console.log(k,":",v)
});

for(let [k,v] of num2)
{
    console.log(k,":",v);
}