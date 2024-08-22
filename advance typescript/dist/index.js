"use strict";
console.log("welcome ts");
console.log("hello mukesh");
let userId;
userId = 55;
// below code is a normal way not recommended for production grade code
// class User {
//     // all the variables are by default have public keyword.
//     public name : string;
//     age : string; // instead of private we can also use # to mark a variable as private
//     private readonly city : string = "jaipur";  // by using private keyword we restrict the access of the variable
//     // readonly city : string = "jaipur"; // by using readonly keyword we are only allowed to read the data stored inside the variable but not the allowed to update the data.
//     constructor(name:string, age: string){
//         this.name = name;
//         this.age = age;
//         this.city = "delhi"; // this is allowed as we are inside the constructor
//         console.log(this.city);
//     }
// }
// const human = new User("hitesh","18");
// console.log(human.name,human.age);
// below code is somewhat a production level code
class User {
    constructor(name, age, userId) {
        this.name = name;
        this.age = age;
        this.userId = userId;
        this.city = "jaipur";
        console.log(this.city);
    }
}
