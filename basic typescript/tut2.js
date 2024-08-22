"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "mukesh",
    email: "mukesh@mukesh.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "mukesh", isPaid: false });
// here we are unable to pass more info as the func "createUser" only requires "name" and "isPaid" properties
// eg: createUser({name: "mukesh",isPaid: false, email: "mk@mk.com", phone: 8249546618})  --->   this will throw an error
// for that we can also use the following
var newUser = { name: "mukesh", isPaid: false, email: "mk@mk.com", phone: 8249546618 };
createUser(newUser);
function createCourse() {
    return { name: "c++", price: 100 };
}
function createUser1(user) {
    return user;
}
var user = createUser1({ name: "mukesh", email: "mk@mk.com", isActive: true });
console.log(user.name);
