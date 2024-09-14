function padLeft(padding: number | string, input: string): string {
  throw new Error("Not implemented yet!");
}

// If padding is a number, it will treat that as the number of spaces we want to prepend to input. If padding is a string, it should just prepend padding to input.

// function padLeft(padding: number | string, input: string): string {
  //   return " ".repeat(padding) + input;
  // }
  
// the above code throws error because
// Argument of type 'string | number' is not assignable to parameter of type 'number'. Type 'string' is not assignable to type 'number'.

function padLeftOne(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// In the above example we have explicitly checked if padding is a number first, then we are handling the case where it’s a string.

// Another Example

function detectType(val: number | string){
  if(typeof val === "string"){
    return val.toLocaleLowerCase()
  }
  return val + 3;
}

// the "in" property

interface User{
  name: string,
  email: string
}

interface Admin{
  name: string,
  email: string,
  inAdmin: boolean
}

function isAdminAccount(account: User | Admin){
  // return account.isAdmin // this line will throw an error because account can be of user or admin so first we need to check it, to do so 

  if("isAdmin" in account){
    return account.isAdmin;
  }
}

//  the "instanceOf" property

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// using type predicates

type Fish = {
  swim : () => void
}

type Bird = {
  fly : () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Adding pet is Fish states that if the above function return true then the pet is a fish and if return false then it is a bird.

// if pet is fish ignored then the below function will run but it will still in confuse that whether pet is fish or bird

function getFood(pet: Fish | Bird){
  if(isFish(pet)){
    pet
    return "fish food"
  } else{
    pet
    return "bird food"
  }
}
  
// The discriminated unions

interface Circle{
  kind: "circle",
  radius: number
}

interface Square{
  kind: "square",
  side: number
}

interface Rectangle{
  kind: "rectangle",
  length: number,
  width: number
}

type shape = Circle | Square | Rectangle

function checkShape(shape: shape){
  if(shape.kind === "circle"){
    return Math.PI * shape.radius ** 2;
  }
  else if(shape.kind === "square"){
    return shape.side * shape.side;
  }
  return shape.length * shape.width;
}

function getArea(shape: shape){
  switch(shape.kind){
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.side * shape.side
    case "rectangle":
      return shape.length * shape.width
    default:
      const _defaultforshape: never = shape
      return _defaultforshape
  }
}