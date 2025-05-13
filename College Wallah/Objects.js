// Object is kind of like has map/dictionary
let obj = {
    nam :"Shobhit",
    kam :"Java Developer",
    "umar abhi" : "22",
    dhram  : "Hindu"
}
// console.log(obj.kam,obj.nam,obj.dhram,obj["umar abhi"]); 
// console.log(obj["nam"]);
 
// for (const k in obj) {
//     console.log(k+" : "+obj[k]);
// }

for(const k in obj){
    console.log(k,obj[k]);
    
}
