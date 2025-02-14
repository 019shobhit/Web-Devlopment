function sayName(){
    console.log("S");
    console.log("H");
    console.log("0");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("T");
    
}

// sayName()
// console.log()
// sayName()

function add(x,y){
    return x+y
}

console.log(add(4,5));


function loginUserMessage(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} looged in`
}
console.log(loginUserMessage());

