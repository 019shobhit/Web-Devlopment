const sym = Symbol("sv")

const obj = {
    fname : "shobhit",
    lname : "chauhan",
    "full_name":"shobhit chauhan",
    [sym] : "sv",
    age : ["14","16",12]
}
// const s = Symbol("symbol hi kha de")
// const temp = {
//     [s] : "symbol hi kha de"
// }
// console.log(typeof temp.s)
// console.log(temp[s])


// console.log(obj.fname);
// console.log(obj["fname"]);
// console.log(obj.full_name);
// console.log(obj["full_name"]);
// console.log(typeof obj[sym])

// obj.full_name = "kya hall hai"
// console.log(obj);

obj.greeting = function(){
    console.log("Hello shobhit")
}
obj.greeting2 = function(){
    console.log(`Hello shobhit,${this.fname}`)
}
console.log(obj.greeting())
console.log(obj.greeting2())




