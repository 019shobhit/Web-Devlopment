// q1 

// let a=10
// let b = 20
// let arr = [1,20,30,4,50];
// let newArr = arr.filter((val)=>{
//     return !(val%10);
// })
// console.log(newArr)

// let sum = a+b;
// arr.push(sum)

// console.log(arr)

// while(n !=0){
//     Array.push(n);
//     console.log(arr)
// }

let arr = [1,2,3,4];
let val = arr.reduce((a,b)=>{
    return a*b;
})
console.log(val)