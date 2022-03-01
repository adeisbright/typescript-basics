/**
 * A type alias is a name for a type. 
 * You can create types and use them anywhere in your code
 * You cannot redeclare a variable in one file in another file.
 * if I have const name = John in a.ts  , I cannot have const name = baba in another file b.js 
 * because they are scoped globally
 */

type Person = {
    name? : string, //means name is an optional property 
    age : number
}

type NaijaPerson = Person & {
    lga : string
}
const person : NaijaPerson = {
    name : "Adeleke Bright" , 
    age : 27 , 
    lga : "Ojo"
} ; 

console.log(person.age) ; 

type ID = number | string ; 

const showId = (id : ID) => {
    if (typeof id === "string"){ 
        return id.toLocaleLowerCase() ; 
    }
    return Math.floor(id);
}

const myId = showId("U2011/3010005") ;
console.log(myId) ; 