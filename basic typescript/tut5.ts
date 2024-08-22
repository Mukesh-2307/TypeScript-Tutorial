// tuples in typescript

let Tuser : [string, number, boolean];

Tuser = ["mukesh", 42, true]; // allowed
// Tuser = [true, "mukesh", 42]; // not allowed

let RGB : [number, number, number] = [255, 255, 255]; // this is also allowed

type User = [number, string];

const newUser : User =[42, "20btcse42@suiit.ac.in"];

newUser[1] = "newMail@yahoo.com"; // this is still allowed, so we cannot be assure that the values are not changed

// so all array methods are allowed i.e
newUser.push("mkd"); // is allowed

console.log(newUser[0]);
console.log(newUser[1]);


// about ENUMS 

enum seatChoice  {
    // upper = "UPPER" we can also assign strings to these variables
    upper = 1,
    middle, // by default middle will follow up value of upper+1 i.e 2
    lower // similarly with lower will contain value 3
}

const mkSeat = seatChoice.upper;
console.log(mkSeat);

// interfaces in typescript
// interface is a very loose form of a class

interface NUser {
    readonly dbId: number,
    username: string,
    email: string,
    userId: number,
    googleId?: string

    // func defination in interfaces
    // method 1
    startTrail: () => string

    // method 2
    startTrail2():string

    // ex:
    getCoupon(couponCode: string, value: boolean): number
}

// reopening of the interface

interface NUser {
    gitHubId: string
}

const mk: NUser = {
    dbId: 9191,
    username: "mukesh",
    email: "mk@mk.com",
    userId: 455,
    startTrail:()=>{
        return "happy"
    },
    startTrail2: ()=>{
        return "happy"
    },
    getCoupon: (code: "mk10", val: true)=>{
        return 10
    },
    gitHubId: "sob3"
}

interface Admin extends NUser {
    role: "admin" | "sde" | "intern"
}

const subham : Admin = {
    dbId: 8789,
    username: "subham",
    email: "sk@sk.com",
    userId: 22,
    startTrail:()=>{
        return "happy"
    },
    startTrail2: ()=>{
        return "happy"
    },
    getCoupon: (code: "mk10", val: true)=>{
        return 10
    },
    gitHubId: "sob4",
    role: "admin"
}

export{}