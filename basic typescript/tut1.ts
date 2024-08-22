// in these type of scenarios the type inference need to be avoided, as the variable "hero" will set its type to "any" which is considered as bad in typescript.

// let hero; // avoid

// instead use
let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();

// lect 2

// incase of function type inference need to be avoided

function addTwo(num: number) {
  return num + 2;
}

addTwo(6);

function toUpper(str: string) {
  return str.toLocaleUpperCase();
}

toUpper("good morning");

function signUp(name: string, age: number, relationshipStatus: boolean) {}// this piece of code is without passing default values for different variables
signUp("ritesh", 5, false);


var loginUser = (Name: string, Age: number, relStatus: boolean = false) => {}; // this showcase the how we can pass default values to a variable
loginUser("mukesh", 22);

function newFunc1(num: number): number{  // this is how we can decide what type of values the function is asked to return, here the function "newFunc1" is assigned to return the values of type number only.
    num += 2;

    return num;
    // return "hello";
}

let result: number = newFunc1(5);
console.log(result);

// *note: how to assign more than one type to a function or a variable

// var heros = ["thor", "spiderman", "hulk"]; // type string
var heros = [1, 2, 3]; // type number


// here the typescript will automatically detect the type of values it is receiving
heros.map((hero): string =>{ 
    console.log( `hero is ${hero}`);
    return `${hero}`
})

// "void" will prevent us from returning anything
function consoleErr(errMsg: string): void{
    console.log(errMsg);
}

// "never" will prevent us from returning 
function handleErr(errMsg: string): never{
    throw new Error(errMsg);
}


export {};
