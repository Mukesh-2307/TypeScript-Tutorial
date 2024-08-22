"use strict";
// in these type of scenarios the type inference need to be avoided, as the variable "hero" will set its type to "any" which is considered as bad in typescript.
Object.defineProperty(exports, "__esModule", { value: true });
// let hero; // avoid
// instead use
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
// lect 2
// incase of function type inference need to be avoided
function addTwo(num) {
    return num + 2;
}
addTwo(6);
function toUpper(str) {
    return str.toLocaleUpperCase();
}
toUpper("good morning");
function signUp(name, age, relationshipStatus) { } // this piece of code is without passing default values for different variables
signUp("ritesh", 5, false);
var loginUser = function (Name, Age, relStatus) {
    if (relStatus === void 0) { relStatus = false; }
}; // this showcase the how we can pass default values to a variable
loginUser("mukesh", 22);
function newFunc1(num) {
    num += 2;
    return num;
    // return "hello";
}
var result = newFunc1(5);
console.log(result);
// *note: how to assign more than one type to a function or a variable
// var heros = ["thor", "spiderman", "hulk"]; // type string
var heros = [1, 2, 3]; // type number
// here the typescript will automatically detect the type of values it is receiving
heros.map(function (hero) {
    console.log("hero is ".concat(hero));
    return "".concat(hero);
});
// "void" will prevent us from returning anything
function consoleErr(errMsg) {
    console.log(errMsg);
}
// "never" will prevent us from returning 
function handleErr(errMsg) {
    throw new Error(errMsg);
}
