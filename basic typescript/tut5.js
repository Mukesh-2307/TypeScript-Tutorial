"use strict";
// tuples in typescript
Object.defineProperty(exports, "__esModule", { value: true });
var Tuser;
Tuser = ["mukesh", 42, true]; // allowed
// Tuser = [true, "mukesh", 42]; // not allowed
var RGB = [255, 255, 255]; // this is also allowed
var newUser = [42, "20btcse42@suiit.ac.in"];
newUser[1] = "newMail@yahoo.com"; // this is still allowed, so we cannot be assure that the values are not changed
// so all array methods are allowed i.e
newUser.push("mkd"); // is allowed
console.log(newUser[0]);
console.log(newUser[1]);
// about ENUMS 
var seatChoice;
(function (seatChoice) {
    // upper = "UPPER" we can also assign strings to these variables
    seatChoice[seatChoice["upper"] = 1] = "upper";
    seatChoice[seatChoice["middle"] = 2] = "middle";
    seatChoice[seatChoice["lower"] = 3] = "lower"; // similarly with lower will contain value 3
})(seatChoice || (seatChoice = {}));
var mkSeat = seatChoice.upper;
console.log(mkSeat);
var mk = {
    dbId: 9191,
    username: "mukesh",
    email: "mk@mk.com",
    userId: 455,
    startTrail: function () {
        return "happy";
    },
    startTrail2: function () {
        return "happy";
    },
    getCoupon: function (code, val) {
        return 10;
    },
    gitHubId: "sob3"
};
var subham = {
    dbId: 8789,
    username: "subham",
    email: "sk@sk.com",
    userId: 22,
    startTrail: function () {
        return "happy";
    },
    startTrail2: function () {
        return "happy";
    },
    getCoupon: function (code, val) {
        return 10;
    },
    gitHubId: "sob4",
    role: "admin"
};
