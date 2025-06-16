let b1 = document.getElementById("box1");
let b2 = document.getElementById("box2");
let b3 = document.getElementById("box3");
let b4 = document.getElementById("box4");

b1.addEventListener("mouseenter", function () {
    let rnum = Math.floor(Math.random() * 100);
    b1.innerHTML = `<h1>${rnum}</h1>`;
})
b1.addEventListener("mouseleave", function () {
    b1.innerHTML = "<h1> 1</h1>"
})

let clr = "red";
b2.addEventListener("mouseenter", function () {
    if (clr == "red") {
        b2.style.backgroundColor = "red";
        clr = "green";
    }
    else if (clr == "green") {
        b2.style.backgroundColor = clr;
        clr = "yellow";
    }
    else {
        b2.style.backgroundColor = clr;
        clr = "red";
    }
})
b2.addEventListener("mouseleave", function () {
    b2.style.backgroundColor = "white";
})


b3.addEventListener("mouseenter", function () {
    let r1 = Math.round(Math.random() *256);
    let r2 = Math.round(Math.random() *256);
    let r3 = Math.round(Math.random() *256);
    let color = `rgb(${r1}, ${r2}, ${r3})`;
    b3.style.backgroundColor = color;
})
b3.addEventListener("mouseleave", function () {
    b3.style.backgroundColor = "white";
})

b4.addEventListener("click",function(){
    b1.style.backgroundColor = 
    b2.style.backgroundColor = 
    b3.style.backgroundColor = 
})

b4.addEventListener("click",function(){
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white"
    b3.style.backgroundColor = "white"
})
