"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "hello mukesh";
// greeting = "true";
var myNum = 5;
// myNum.toUpperCase    // throws an error because the .toUpperCase is only available for the type string only
// greeting.toUpperCase();    //will not throw any error because .toUpperCase method is available for this type (string type variables)
console.log(greeting.toUpperCase());
// Number
var userId = 3354; // if we write "let userId = 3354" then typescript will automatically detect that the user's behaviour of trying to add a value to type number so it will automaticall add ": number" to it, even though it is not visible it is there it is called type inference
// boolen
var isLoggedIn = true; // same goes for "let isLoggedIn = true
var user = { name: "ritesh ", age: 10 };
console.log(user.name);
