// for(let i=0;i<5;i++){
//     console.log(i + " Hello world");
// }

 

// For of loop

// let str = 'Shobhit Chauhan';
// let l=0;
// for(let i of str){
//     console.log(i);
//     l++;
// }
// console.log(l);


// for in loop


// let stu = {
//     fname : 'shobhit',
//     lname :'chauhan',
//     age : 21,
//     ispass : true
// };  


// for(let key in stu){
//     console.log(key +' = '+stu[key]);
// }


// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Q2
// let gameNum = 25;

// let userNum = prompt("guess the game number: ");

// while(userNum != gameNum){
//     userNum=prompt("You Entered wrong Number ! Guess Again");

// }

// console.log("Congratulations You Entered the correct number");


// let obj={
//     item : 'pen',
//     price : 10
// };
// let output = `the price of ${obj.item} is ${obj.price} rupees`;
// console.log("the price of ",obj.item," is ",obj.price);
// output = output.toUpperCase();
// console.log(output);

// let str = `This is a Special Type of Literals`;
// console.log(str.toUpperCase());



// let str1 = 'Shobhit';
// let str2 = 'Chauhan';
// let newstr = str1.replaceAll('h','x');
// console.log(newstr);

let fname = prompt("Enter your full name withouth giving any spaces");
const l = fname.length;
let userName = '@' + fname + l;
console.log(userName);


