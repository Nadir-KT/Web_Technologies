let data=[4,5,7,1,8]
for(let i=0;i<data.length;i++)
{
    console.log(data[i])
}

let no=[]
no[0]=1
no[99]=100
for(let i=0;i<no.length;i++)
{
    console.log(no[i])
}
console.log(no)
//for of loop //data/Value
console.log('for of loop');
for(let num of data)
{
    console.log(num);
}

for(let nu of no)
{
    console.log(nu)
}
//for in loop //index/Key
for(let nu in no)
{
    console.log(nu)
}

for(let nu in no)
{
    console.log(no[nu])
}