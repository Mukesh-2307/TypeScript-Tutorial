console.log("welcome ts");
console.log("hello mukesh");

let userId: number;

userId = 55;

// below code is a normal way not recommended for production grade code

// class User {
//     // all the variables are by default have public keyword.
//     public name : string;
//     age : string; // instead of private we can also use # to mark a variable as private
//     private readonly city : string = "jaipur";  // by using private keyword we restrict the access of the variable
//     // readonly city : string = "jaipur"; // by using readonly keyword we are only allowed to read the data stored inside the variable but not the allowed to update the data.
//     constructor(name:string, age: string){
//         this.name = name;
//         this.age = age;
//         this.city = "delhi"; // this is allowed as we are inside the constructor
//         console.log(this.city);
//     }
// }

// const human = new User("hitesh","18");

// console.log(human.name,human.age);

// below code is somewhat a production level code

class User {

  // private _courseCount = 25;
  protected _courseCount = 25;

  private readonly city: string = "jaipur";
  constructor(
    public name: string,
    public age: string,
    private userId : number
    ){
    console.log(this.city);
  }

  private deleteToken(){
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple ${this.name}`
  }

  get courseCount(): number {
    return this._courseCount
  }

  set courseCount(courseNum){
    if (courseNum <= 1){
      throw new Error("course count should be more than 1")
    }
    this._courseCount = courseNum;
    console.log(this._courseCount);
  }
}

const hitesh = new User("hitesh","18",24);

// hitesh.deleteToken(); // this is not allowed as deleteToken method is a private method and can only be accessable within the user

hitesh.courseCount = 12;
let value = hitesh.courseCount;
console.log(value);

// here the the subUser will inherit all the properties and the methods of the User class except the private properties and methods
class subUser extends User {
  isFamily: boolean = true;
  changeCourseCount (){
    this._courseCount = 27;
  }
}

// interface TakePhoto{
//   cameraMode: String;
//   filter: String;
//   burst: Number;
// }

// interface Story{
//   createStory(): void;
// }

// class Instagram implements TakePhoto{
//   constructor(
//     public cameraMode:String,
//     public filter: String,
//     public burst: Number,
//   ){}
// }

// class Youtube implements TakePhoto{
//   constructor(
//     public cameraMode:String,
//     public filter: String,
//     public burst: Number,
//     public short: string,
//   ){
//   }
//   creatStory(): void{
//     console.log("story created");
//   }
// }