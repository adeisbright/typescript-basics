
// A union is a type that is formed from two or more types. The value will be of one of the types
// To run this file :  tsc union.js --outDir dist
/**
 * 
 * @param id {Number or String} the id of the entity
 * @returns Number or String
 */
const printId = (id : number | string)  => {
    //Narrow the code so as to be able to work with the string type
    if (typeof id === "string"){ 
        return id.toLocaleLowerCase() ; 
    }
    return Math.floor(id);
}

const tundeId = printId("U2011/3010005") ;
console.log(tundeId) ; 

const welcomePeople = ( people : string [] | string ) => {
    if (Array.isArray(people)){
        people.map((person : string) => console.log(person.toLocaleLowerCase()) )
    }else{
        console.log(`This is my person. I am pleased with ${people}`)
    }
}

welcomePeople(["Bosede" , "Jide" , "Wayo"])