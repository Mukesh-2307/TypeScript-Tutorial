type User = {
    name : string,
    id: number
}

type Admin = {
    userName : string,
    id : number
}

let hitesh : User | Admin = {
    name: "harry",
    id: 344
}

hitesh = {
    userName: "cwh",
    id: 344
}

function getDBId(id : number | string){
    // some api calls
    console.log(`db id is ${id}`)
}

// here both are allowed as the function can take arguments of type "number" and "string"
getDBId(5);
getDBId("55");


function GetdbId(id : number | string){
    // but when the below is tried the it will throw an error
    // id.toLocaleLowerCase();


    // this problem is solved using the below method
    if(typeof id === "string"){
        id.toLocaleLowerCase();
    }
}

// using the above method to arrays

let data1 : number[] = [2,4,6,8] // only numbers are allowed
let data2 : string[] = ["ravi", "hari" ,"carry"] // only strings are allowed
let data3 : (number | string) [] = ["harry", 55, "nobody"] // both string and number are allowed


// we can pass default values to the variables by using the below method
let seatAllotment : "upper" | "middle" | "lower";

seatAllotment = "upper";
// seatAllotment = "crew"; // this will throw an error

export{}