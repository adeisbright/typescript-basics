"use strict";
// Creating a basic hello world example 
// import {selector} from "../hello" ; 
let createNewElement = (element) => document.createElement(element);
// let selectAnElement = <Type>(element :Type ) : object | unknown => { 
//     try {
//         if (element != null && typeof element === "string "){
//             return document.createElement(element) as HTMLElement ; 
//         } 
//     }catch(error : unknown){
//        return error ; 
//     }
// }
let selectAnElement = (element) => {
    try {
        if (element != null && typeof element === "string") {
            return document.querySelector(element);
        }
    }
    catch (error) {
        return error;
    }
};
let selectAllElement = (element) => document.querySelectorAll(element);
const userName = "Adeleke Bright";
let userAge = 30;
const userAddress = {
    country: "Nigeria",
    state: "Lagos",
    city: "Ikeja",
    address: "2 Allen Avenue Ikeja  , Lagos"
};
const placesVisited = [
    {
        country: "Ghana",
        state: "Accra",
        city: "Accra",
        address: "12 Jackie Appiah Way  , Accra"
    }, {
        country: "United Kingdom",
        state: "London",
        city: "London",
        address: "15 Cockchester way , Chelsea - London"
    }
];
const greetPerson = (personName) => `${personName} says hello`;
let select = (element) => document.querySelector(element);
//select("#app").textContent = greetPerson(userName) ;
const attachButton = (targetName, message) => {
    let loginButton = createNewElement("button"); //Using a type assertion to play with DOM
    if (typeof message === "string") {
        loginButton.innerHTML = message.toUpperCase();
    }
    else {
        loginButton.innerHTML = String(message);
    }
    const target = select(targetName);
    target.append(loginButton);
    return target;
};
let assemblies = {
    name: "Assemblies of God",
    members: ["Tope", " Bose"]
};
console.log(assemblies.name);
class WordCounter {
    constructor(fieldName, message) {
        this.attachElement = (targetName) => {
            const target = select(targetName);
            target.append(this.createElement());
            return target;
        };
        this.element = fieldName;
        this.Message = message;
    }
    createElement() {
        const element = document.createElement(this.element);
        if (typeof this.Message === "string") {
            element.value = this.Message.toUpperCase();
            return element;
        }
        element.value = String(this.Message);
        return element;
    }
    getWords(input) {
        const words = document.querySelector(input);
        let { value } = words;
        return value.split(" ").filter(e => e.length > 0);
    }
}
let counter = new WordCounter("input", "Starting");
window.addEventListener("load", counter.attachElement("#app"));
// function identity<Type>(args) : Type  {
//     return args ; 
// }
// console.log(identity<string>("Hello")) ; 
