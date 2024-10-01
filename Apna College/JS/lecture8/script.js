// let btn1 = document.querySelector("#btn1");

// // btn1.onclick =(e)=>{
// //     console.log(e);
// //     console.log(e.type);
// //     console.log(e.target);
// // }
// btn1.addEventListener("click", (e) => {
//     console.log("button 1 was clicked Handler 1");
//     // console.log(e);
//     // console.log(e.type);
//     // console.log(e.target);
// })

// const handler3 =  () => {
//     console.log("button 1 was clicked Haldler 2");
// };
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click", () => {
//     console.log("button 1 was clicked Haldler 3");
// })
// btn1.addEventListener("click", () => {
//     console.log("button 1 was clicked Haldler 4");
// })

// btn1.removeEventListener("click",handler3);

// let box = document.querySelector("div");
// // box.onmouseover = (e) =>{
// //     console.log("you are inside the box");
// //     console.log(e);
// //     console.log(e.type);
// //     console.log(e.target);
// // }



// PRCATICE QUESTION............................

let mode = document.querySelector("#mode");
let curMode = "light";
let body = document.querySelector("body");

mode.addEventListener("click", () => {
    // console.log("You are trying to change the mode");
    if (curMode === "light") {
        curMode = "dark";
        body.classList.add("dark") ; 
        body.classList.remove("light");
    }
    else {
        curMode = "light";
        body.classList.add("light");
        // body.classList.remove("dark");

    }
    console.log(curMode);
})
