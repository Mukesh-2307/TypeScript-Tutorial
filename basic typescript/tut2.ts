const User = {
    name : "mukesh",
    email: "mukesh@mukesh.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name: "mukesh",isPaid: false});
// here we are unable to pass more info as the func "createUser" only requires "name" and "isPaid" properties
// eg: createUser({name: "mukesh",isPaid: false, email: "mk@mk.com", phone: 8249546618})  --->   this will throw an error
// for that we can also use the following

let newUser = {name: "mukesh",isPaid: false, email: "mk@mk.com", phone: 8249546618}
createUser(newUser);

function createCourse():{name: string, price: number}{
    return {name: "c++", price: 100}
}


type User = {
    name: string,
    email: string,
    isActive: boolean
}


function createUser1(user: User){
    return user;
}

let user = createUser1({name: "mukesh",email: "mk@mk.com", isActive: true})
console.log(user.name)

export{} 