let greeting : string = "hello mukesh";

// greeting = "true";

let myNum : number = 5;

// myNum.toUpperCase    // throws an error because the .toUpperCase is only available for the type string only

// greeting.toUpperCase();    //will not throw any error because .toUpperCase method is available for this type (string type variables)
console.log(greeting.toUpperCase());


// Number

let userId : number = 3354; // if we write "let userId = 3354" then typescript will automatically detect that the user's behaviour of trying to add a value to type number so it will automaticall add ": number" to it, even though it is not visible it is there it is called type inference

// boolen

let isLoggedIn : boolean = true; // same goes for "let isLoggedIn = true

let user = {name: "ritesh ", age: 10}; 
console.log(user.name);



export{}  