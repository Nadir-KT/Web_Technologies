//Array forEach function
let nums=[10,25,14,17,60,4,7]

nums.forEach(n=>{
    console.log(n);
})

nums.forEach(n=>{
    if(n%2===0)
    console.log(n);
})

nums.forEach((n,i,nums)=>{
    console.log(n,i,nums);
})

nums.filter(n=>n%2===0).forEach(n=>{
    console.log(n*2);
})

nums.filter(n=>n%2===0).map(n=>100).forEach(n=>{
    console.log(n*2);
})

let result=nums.filter(n=>n%2===0).map(n=>100).reduce((a,b)=>a+b)
console.log(result);