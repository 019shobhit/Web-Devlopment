// How JavaScript works in browser
// alert("Hello");

console.time("loop")
for(let i=0;i<100;i++){
    let x = 0
    console.log(i);
}
console.timeEnd("loop")