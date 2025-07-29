// Map, Filter and Reduce
let arr = [1,2,4,5,6]
arr = arr.map((elem)=>{
    return elem+1
})

let arr2 = arr.filter((elem)=>{
    return (elem %2==0)
})


console.log(arr2)

// Redude method

let arr1 = [1,2,3,4,5,8,6,7,3,89,]

let val = arr1.reduce((a,b)=>{
    return a+b;
})
console.log(val)