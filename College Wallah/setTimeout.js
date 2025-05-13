function h(x){
    console.log(x);
    
}

function m(){
    console.log("mello");
    
}

// setTimeout(h,2*1000);
// setTimeout(m,3*1000);

for(let i=1;i<=10;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000)
}


setTimeout(function(){
    console.log("kya hall hai");
    
},3*1000);