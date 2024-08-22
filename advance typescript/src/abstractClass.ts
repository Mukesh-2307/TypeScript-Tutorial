abstract class TakePhoto {
    constructor(
        public cameraMode: String,
        public filter: String
    ){}

    abstract getSepia(): void;
    getReelTime(): number{
        // some complex calc
        console.log("inside getReelTime");
        return 8;
    }
}


class Insta extends TakePhoto{
    constructor(
        public cameraMode:String,
        public filter: String,
        public newBrust: Number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("Sepia");
    }
}

// const h1User = new TakePhoto("burst","green cine",5); // we cannot create an instance of the abstract class but we can use the extended class to create instance.
const h1User = new Insta("burst","green cine",5); // this is the correct way to create an instance of the abstract class
h1User.getReelTime();
h1User.getSepia();