function calculateUsercartPrice(...n1){
    return n1;
}

console.log(calculateUsercartPrice(20,20,30,40,"sho"))

const user = {
    username : "shobhit",
    price : 199
}

function handleObj(anyObj){
    return `UserName is ${anyObj.username}, And Price is ${anyObj.price}`
}
console.log(handleObj(user));


const arr = [1,2,3,4,5]
function handleArray(array){
    array[1]= 100
}
// console.log(handleArray(arr));
handleArray(arr)
console.log(arr);

