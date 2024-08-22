"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hitesh = {
    name: "harry",
    id: 344
};
hitesh = {
    userName: "cwh",
    id: 344
};
function getDBId(id) {
    // some api calls
    console.log("db id is ".concat(id));
}
// here both are allowed as the function can take arguments of type "number" and "string"
getDBId(5);
getDBId("55");
function GetdbId(id) {
    // but when the below is tried the it will throw an error
    // id.toLocaleLowerCase();
    // this problem is solved using the below method
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
}
// using the above method to arrays
var data1 = [2, 4, 6, 8]; // only numbers are allowed
var data2 = ["ravi", "hari", "carry"]; // only strings are allowed
var data3 = ["harry", 55, "nobody"]; // both string and number are allowed
// we can pass default values to the variables by using the below method
var seatAllotment;
seatAllotment = "upper";
