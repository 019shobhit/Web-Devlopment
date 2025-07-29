// Arraus using foreach,forin and other loops

let arr = [1,2,3,4,5,6];

// FOR LOOP
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// FOR EACH LOOP
// arr.forEach((i)=>{
//     console.log(i)
// })

// ARRAY.FROM
let str = "Shobhit"
let temp = Array.from(str);
// console.log(temp)
// temp.forEach((i)=>{
//     console.log(i)
// })

// FOR OF LOOP
for(let i of temp){
    console.log(i)
}

// FOR IN LOOP
for(let j in temp){
    console.log(temp[j])
}




