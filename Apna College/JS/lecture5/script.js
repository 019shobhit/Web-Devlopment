// FUNCTION................................

// function printx(){
//     console.log("Hello I am Shobhit Chauhan");
//     console.log("We are Learning MERN stack in college by Programing Pathshala");
// }
// printx();

// function sum(a,b){
//     let x = a+b;
//     return x;
// }
// let y = sum(4,5);
// console.log(y);

// ARROW FUNCTION .....................................

// const sum=(a,b)=>{
//     return a+b;
// }

// const mul = (a,b)=>{
//     return a*b;
// }
// console.log(sum(7,9));
// mul(4,6);

// Practice Question 1 ....................................

// function countVowels(str) {
//   let count = 0;
//   for (let i of str) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       count++;
//     }
//   }
//   return count;
// }
// const val = countVowels("Shobhit chaiuhan");
// console.log(val);

// Practice Question 2 ....................................

// const countVowels = (str) => {
//     let count = 0;
//   for (let i of str) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       count++;
//     }
//   }
//   console.log(count);
// };
// countVowels("Shobhitchauhan");

// FUNCTION PASS IN FUNCTION..........................

// function sum(a,b){
//   return a+b;
// }
// function prn(sum){
//   console.log(sum(3,4));
// }
// prn();

//.......................................................

// let arr = [1,2,3,4,5,6];
// let arr = ['pune','delhi','up','banglore'];
// arr.forEach((val,idx,arr)=>{
//   console.log(val.toUpperCase(),idx,arr);
// })

// PRACTICE SET
// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((val)=>{
//   console.log(val*val);
// })

// const newarr=arr.map((val)=>{
//   return val;
// });
// console.log(newarr);

//  const filtered = arr.filter((val)=>{
//   return val%2===0;
//  })
//  console.log(filtered);

// const sumf = arr.reduce((sum, val) => {
//   return sum + val;
// })
// console.log(sumf);

// const max = arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr;
// })
// console.log(max);


// Question........................................................
// let marks = [96,89,99,56,95,96,93,12,79,90];

// const f =marks.filter((val)=>{
//   return val>90;
// });
// console.log(f);


// QUESTION............................................................

let n = prompt("Enter a number");
let arr=[];
for(let i=0;i<n;i++){
  arr[i]=i+1;
}

let sum = arr.reduce((summ,curr)=>{
  return summ + curr;
});
let mul = arr.reduce((summ,curr)=>{
  return summ * curr;
});
console.log(sum);
console.log(mul);


