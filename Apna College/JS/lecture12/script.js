// Shyncronous Javascript

// console.log("one");
// console.log("two");
// console.log("three");

// Asynchronous Javascript programming

// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000);

// setTimeout (()=>{
//     console.log("hello");
// },2000);

// Calculater function


// function sum(a, b) {
//     console.log(a + b);
// }
// function calculater(a, b, sumCallback) {
//     sumCallback(a,b);
// }
// calculater(1,2,(a,b)=>{
//     console.log(a+b);
// });

//  

function getData(dataID) {
    setTimeout (()=>{
        console.log("data", dataID);
    },2000);
}
getData(1);
getData(2);
getData(3);

// getData();