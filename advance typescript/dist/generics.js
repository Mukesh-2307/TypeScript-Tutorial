"use strict";
// As we know, we can define var in this way " const score : Array<number> = []" 
// this can also be done by using "any" keyword and the syntax will be like
// function identityNew(val: any): any{
//     return val;
// }
// but the problem in the above method is the function can take input of type string and the return type can be of type number but we want both the the input and return type to be same. To do so we use generics
//  way to define generics
function identityOne(val) {
    return val;
}
identityOne(5);
identityOne("mukesh");
// passing object of user-defined datatype to generics
identityOne({ brand: "cello", type: 242 });
