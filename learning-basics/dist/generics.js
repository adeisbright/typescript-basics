var identity = function (arg) {
    return arg;
};
var output1 = identity("Hello Bobo");
var output2 = identity(45);
var output3 = identity([2, 3, 5]);
var output4 = identity("Come Home"); //Argument Type inference 
console.log(output1);
console.log(output3);
// This generic printContent can work on an array of any type 
var printContent = function (content) {
    content.map(function (e) { return console.log(e); });
    return content;
};
printContent([1, 3, 4]);
//Generic Types 
var myIdentity = identity;
console.log(myIdentity(45));
var anotherIdentify = identity;
console.log(anotherIdentify("Hello"));
var logger = function (arg) {
    console.log(arg.length);
    return arg;
};
logger("Hello"); //This function can work with String , Array , objects with length propert
// Using Types in Generic constraints 
var getProperty = function (obj, key) {
    return obj[key];
};
var x = { a: "40", b: "Cinema" };
var f = function () {
    return {
        x: 40,
        msg: "Hello"
    };
};
var c = {
    x: 69,
    msg: "How are you doing"
};
var i2 = ["Sylvester"];
