//Array De-structuring
let data=[5,10,7,1,9,12]
let [a,b,,d,e]=data
console.log(a,e)
//Swapping
a=10;
b=20;
[b,a]=[a,b]
console.log(a);
console.log(b);
//Split()
let word='split string to array structure'.split(' ')
console.log(word);
let [f,g,h,...i]=word;
console.log(f);
console.log(i);