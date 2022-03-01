// A union is a type that is formed from two or more types. The value will be of one of the types
/**
 *
 * @param id {Number or String} the id of the entity
 * @returns Number or String
 */
var printId = function (id) {
    //Narrow the code so as to be able to work with the string type
    if (typeof id === "string") {
        return id.toLocaleLowerCase();
    }
    return Math.floor(id);
};
var tundeId = printId("U2011/3010005");
console.log(tundeId);
var welcomePeople = function (people) {
    if (Array.isArray(people)) {
        people.map(function (person) { return console.log(person.toLocaleLowerCase()); });
    }
    else {
        console.log("This is my person. I am pleased with " + people);
    }
};
welcomePeople(["Bosede", "Jide", "Wayo"]);
