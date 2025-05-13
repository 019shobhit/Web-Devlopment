// let arr = [1, 3, 4];
// console.log(arr);

// arr.push(50);
// console.log(arr);

// arr.unshift(5);
// console.log(arr);
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let arr = [1,'a',"shobhit",true];
// console.log(arr);
// for(let i = 0; i<arr.length;i++){
//     console.log(i,"->",arr[i]);
// }
// for (const i of arr) {
//     console.log(i);
// }
for(a of arr){
    console.log(a);
}

arr.forEach((i,j)=>{
    console.log(j,i);
})


