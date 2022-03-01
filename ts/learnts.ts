// Creating a basic hello world example 
// import {selector} from "../hello" ; 
let createNewElement = (element : string) : object => document.createElement(element) ; 
// let selectAnElement = <Type>(element :Type ) : object | unknown => { 
//     try {
//         if (element != null && typeof element === "string "){
//             return document.createElement(element) as HTMLElement ; 
//         } 
//     }catch(error : unknown){
//        return error ; 
//     }
// }
let selectAnElement = (element : string) : object | unknown => { 
    try {
        if ( element != null && typeof element === "string"){
            return document.querySelector(element) as HTMLElement ; 
        }
    }catch(error){
        return error ; 
    } 
}
let selectAllElement = (element : string) : object => document.querySelectorAll(element) ; 

const userName : string = "Adeleke Bright" ; 
let  userAge : number = 30 ; 

interface Address {
    country : string , 
    state : string , 
    city : string , 
    address : string
} 

interface Place extends Address {
    landmark : string
}
const userAddress : Address = {
    country : "Nigeria" , 
    state : "Lagos" , 
    city : "Ikeja" , 
    address : "2 Allen Avenue Ikeja  , Lagos"
} 

const placesVisited : Address [] = [
    {
        country : "Ghana" , 
        state : "Accra" , 
        city : "Accra" , 
        address : "12 Jackie Appiah Way  , Accra"
    } , {
        country : "United Kingdom" , 
        state : "London" , 
        city : "London" , 
        address : "15 Cockchester way , Chelsea - London"
    }
]
const greetPerson = (personName : string) : string => `${personName} says hello` ; 


let select     = (element : string) : any => document.querySelector(element) ;

//select("#app").textContent = greetPerson(userName) ;

const attachButton = (targetName : string , message : string | number ) : any => {
    let loginButton : HTMLElement = <HTMLElement> createNewElement("button") ; //Using a type assertion to play with DOM
    if (typeof message === "string") {
        loginButton.innerHTML = message.toUpperCase() ;
    }else {
        loginButton.innerHTML = String(message) ;
    }
    const target = select(targetName) ; 
    target.append(loginButton) ; 
    return target ; 
} 
//What is the difference between a type and an Interface  
type Church = {
    name : string ,
    members : string []
}

type Pentecostal = Church & {
    violentPrayer : boolean ; 
}
let assemblies : Church = {
    name : "Assemblies of God" , 
    members : ["Tope" , " Bose"]
}

console.log(assemblies.name) ; 

type NumOrString = string | number

//How to add CSS and styles to stufss in my code 
// When to use Generics 
// Use of modules 
class WordCounter { 
    element : string ;
    Message : NumOrString
    constructor(fieldName : string , message : NumOrString ){
        this.element= fieldName ; 
        this.Message = message
    }
    createElement() : HTMLInputElement {
        const element = <HTMLInputElement>document.createElement(this.element) 
        if (typeof this.Message === "string") {
            element.value = this.Message.toUpperCase() ;
            return element ; 
        }
        element.value= String(this.Message) ;
        return element ;  
    }
    attachElement = (targetName : string  ) : any => {
        const target = select(targetName) ; 
        target.append(this.createElement()) ; 
        return target ; 
    }
    getWords(input : string) : string[]{
        const words = <HTMLInputElement> document.querySelector(input) ; 
        let {value} = words 
        return value!.split(" ").filter(e => e.length > 0) 
    }
    // displayLength(text : string | number) : number { 
    //     const words = this.getWords(this.inputField) ; 
    //     return <number>(()  => {
    //         let total  = 0 
    //         words.map(word => { 
    //            if (text != null && typeof text === "string"){
    //                 if (word.trim().toLowerCase() === text.toLowerCase()){
    //                     total++
    //                 }
    //            }else {
    //                total  + 1 ;
    //            }
    //         }
    //         return total ; 
    //     })
    // }
}
let counter = new WordCounter("input" , "Starting")
window.addEventListener("load" , counter.attachElement("#app")) ; 

// function identity<Type>(args) : Type  {
//     return args ; 
// }
// console.log(identity<string>("Hello")) ; 