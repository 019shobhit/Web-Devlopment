// const student = {
//     firstName : 'Shobhit',
//     lastName : 'Chauhan',
//     age : 21,
//     printAge: function(){
//         console.log("Age is "+this.age);
//     }
// }
// console.log(student.firstName+" "+student.lastName);
// console.log(student.age);



//// OBJECTS................................................
// const employee = {
//     calcTax (){
//         console.log("the tax rete is 10%");
//     }
// }
// const newEmployee = {
//     salery : 1000,
//     name : "shobhit"
// }

// newEmployee.__proto__ = employee;



// CLASSES................................................................................................

// class Toyotacar {
//     constructor(brand,mileage) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start (){
//         console.log("car started");
//     }
//     stop (){
//         console.log("car stopped");
//     }
// }

// let fortuner = new Toyotacar("fortuner,10");
// let lexus = new Toyotacar("lexus",15);


// inheritance in js ........................................................................

// class parent {
//     hello (){
//         console.log("Hello");
//     }
// }

// class child extends parent{}

// let obj = new child ();

class person {
    eat (){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
}

class engineer extends person{
    work(){
        console.log("Solve Problems, Build Somethings");
    }
}

let shobhitObj = new engineer();