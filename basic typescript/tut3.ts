type User = {
    readonly _id: string,
    name : string,
    email : string,
    isActive : boolean,
    cardDetails ?: number // using a "?" before the ":" will allow us to have a attribute which will not throw any error if its value is not passed
}

let myUser: User = {
    _id : "b10",
    name : "harry",
    email : "h@h.com",
    isActive: true,
}

myUser.name = "carry";
console.log(myUser.name);
// myUser._id = "b09"; // we should not reassign new values to the attributes that are defined as readonly property
// console.log(myUser._id);

type cardNumber = {
    cardnumber: string
}

type cardDetails = {
    carddetails: string
}

type creditCard = cardNumber & cardDetails & {
    cvv : number
}

const superHeros : string[] = []
const superPowers : Array<number> = []


type user = {
    name : string,
    isActive : boolean
}

const allUser : user[] = []

const MLModel : number[][] = [
    [255, 255, 255],
    [237, 99, 78]
]

superHeros.push("superman");
superPowers.push(567);

allUser.push({name: "mukesh", isActive: false});

export{}