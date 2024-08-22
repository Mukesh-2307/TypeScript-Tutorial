"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calc
        console.log("inside getReelTime");
        return 8;
    }
}
class Insta extends TakePhoto {
    constructor(cameraMode, filter, newBrust) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.newBrust = newBrust;
    }
    getSepia() {
        console.log("Sepia");
    }
}
// const h1User = new TakePhoto("burst","green cine",5); // we cannot create an instance of the abstract class but we can use the extended class to create instance.
const h1User = new Insta("burst", "green cine", 5); // this is the correct way to create an instance of the abstract class
h1User.getReelTime();
h1User.getSepia();
