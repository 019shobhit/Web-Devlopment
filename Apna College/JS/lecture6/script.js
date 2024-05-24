// alert("Hello Guyg's");
// console.log(window.document);
// console.dir(document.body);

// DOM MANIPULATION...........................

// let one = document.querySelector("p");
// console.dir(one);
// let all = document.querySelectorAll("p");
// console.dir(all);

// let fr = document.querySelector("div");
// console.dir(fr);

// PRACTICE QUESTION ...................................

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText+" From Apna College"; 


// PRACTICE QUESTION ...................................


let boxs = document.querySelectorAll(".box");
// // console.dir(boxs);
// boxs[0].innerText = "Heading one";
// boxs[1].innerText = "Heading one";
// boxs[2].innerText = "Heading one";
let i =0;
for(let div of boxs){
    div.innerText = `new Unique Value ${i}`;
    i++;
}

