var DOM = /** @class */ (function () {
    function DOM(fieldName) {
        this.fieldName = fieldName;
    }
    DOM.prototype.selectField = function (selector) {
        return document.querySelector(selector);
        //return <HTMLElement>document.querySelector(selector)
    };
    DOM.prototype.createFormElement = function (placeholder, tag) {
        var element = document.createElement(tag);
        if (typeof placeholder === "string") {
            element.value = placeholder;
        }
        return element;
    };
    DOM.prototype.createElement = function (tag) {
        return document.createElement(tag);
    };
    DOM.prototype.attachElement = function (target, child) {
        return target === null || target === void 0 ? void 0 : target.append(child); //If the target does not exist then return null
    };
    return DOM;
}());
var App = new DOM("#app");
var appArea = App.selectField("#app");
var nameInput = App.createFormElement("45", "input");
var formSection = App.createElement("section");
formSection.className = "w-50";
App.attachElement(appArea, nameInput);
