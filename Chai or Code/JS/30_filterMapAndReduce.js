const lang = ["java","cpp","c","javaScript","python"];
let arr = [1,2,3,4,5,6,7]

// const val = lang.forEach((item)=>{
//     console.log(item);
    
// })

// console.log(val)

let r = arr.filter( (val)=> {
    return val < 6
})

r = arr.filter((val)=>{
    return val >2 && (val %2==0)
})

// console.log(r);

// arr = arr.map((m)=> m+10)
// console.log(arr);

// const newArr = arr.map( (num)=> num*10).map((num)=>num+1)
// console.log(newArr);


// reduce

// const carr = arr.reduce(function(acc,cval){
//     console.log(`acc: ${acc} and current value is : ${cval}`);
//     return acc+cval
// },0)

// const carr = arr.reduce((acc,cval)=> acc+cval,0)
// console.log(carr);

const shopingcart =[
    {
        item :"a",
        price :100
    },
    {
        item : "b",
        price :499
    },
    {
        item :"a",
        price :100
    },
    {
        item : "b",
        price :499
    }
]

const price = shopingcart.reduce((acc,utem)=> acc+utem.price,0);
console.log(price)




