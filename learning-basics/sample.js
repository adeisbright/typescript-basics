var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    // export class LettersOnlyValidator implements StringValidator {
    //     isAcceptable(s: string) {
    //         return lettersRegexp.test(s);
    //     }
    // }
    // export class ZipCodeValidator implements StringValidator {
    //     isAcceptable(s: string) {
    //         return s.length === 5 && numberRegexp.test(s);
    //     }
    // }
})(Validation || (Validation = {}));
// Some samples to try
// let strings = ["Hello", "98052", "101"];
// // Validators to use
// let validators: { [s: string]: Validation.StringValidator } = {};
// validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();
// // Show whether each string passed each validator
// for (let s of strings) {
//   for (let name in validators) {
//     console.log(
//       `"${s}" - ${
//         validators[name].isAcceptable(s) ? "matches" : "does not match"
//       } ${name}`
//     );
//   }
// }
/// <reference path="namespaces.ts" />
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
/// <reference path="namespaces.ts" />
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
/// <reference path="namespaces.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
