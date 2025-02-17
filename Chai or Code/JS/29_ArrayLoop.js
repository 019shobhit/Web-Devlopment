const arr = [1,2,3,4,5,6,7]
for (const element of arr) {
    // console.log(element);
}

const naam = "shobhit";
for(const n of naam){
    // console.log(n);
}

const map = new Map()

map.set("k1" ,"val1")
map.set("k2","val2")
map.set("k3","val3")


// console.log(map);
for(const [keys,value] of map){
    // console.log(keys+" -> "+value);
}

const obj = {
    k1 : "val1",
    k2 : "val2",
    k3 : "val3"
}
// for(const [keys,value] of obj){
    // console.log(keys+" -> "+value);
// }

for(const dat in obj){
    // console.log(dat +" -> "+obj[dat]);
}

arr.forEach(function (item){
    // console.log(item);
})

arr.forEach((val)=>{
    // console.log(val);
})

function fun(item){
    console.log(item)
}
// arr.forEach(fun)


