let number = [10,20,30,40,50]
let count = 0;
number.forEach((n,i) =>{
    count = count + n;
    console.log(i)
})
console.log(count)