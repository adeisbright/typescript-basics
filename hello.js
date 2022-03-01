// A simple program providing everything needed to kickstart development with typescript 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user;
(function (user) {
    user[user["age"] = 20] = "age";
    user["gender"] = "Female";
    user["name"] = "Folashade Adeleke";
})(user || (user = {}));
var greetUser = function (userName) { return "Hello " + userName + " "; };
var amount = 450;
var isOld = false;
var fast;
var sayHello = function () { return console.log("Hello , World"); };
var state = {
    name: "Lagos",
    capital: "Ikeja"
};
var items = ["Mango", "Pawpaw"];
items.map(function (item) {
    console.log(item);
});
var selector = function (element) { return document.querySelector(element); };
var selectAll = function (element) { return document.querySelectorAll(element); };
var createElement = function (element) { return document.createElement(element); };
var NaijaStates = /** @class */ (function () {
    function NaijaStates(capital) {
        this.name = "a"; //This line was throwing error since I did not pass a value for the name which is private
        this.capital = capital;
    }
    NaijaStates.prototype.echoName = function () {
        return this.name;
    };
    NaijaStates.prototype.setName = function (name) {
        return this.name = name;
    };
    return NaijaStates;
}());
var awka = new NaijaStates("Awka");
awka.setName("Anambra");
selector("#app").textContent = NaijaStates.isTribalistic ? "They are not tribalist" : "They are tribalist";
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.add = function (point) {
        var point2d = _super.prototype.add.call(this, point);
        return new Point3D(point2d.x, point2d.y, this.z + point.z);
    };
    return Point3D;
}(Point));
