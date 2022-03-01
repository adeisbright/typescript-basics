// An interface is another way to name an object type 
interface Book {
    title : string , 
    price : number
}

interface ChristianBook extends Book {
    category : string
}

const smallBible : ChristianBook ={
    title : "Small Bible" , 
    price : 400 , 
    category : "Religion"
}

console.log(smallBible.category)

//Working with literals 
let direction : "Right" | "Left" | "Top" | "Bottom"  = "Bottom";  

function compare(a : string , b : string) :  1 | 0 | -1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

const req = {
    url : "http://localhost:4500" , 
    method : "GET"
}

const handleRequest = (url : string , method : string) : string =>  `${url} uses ${method}` 
console.log(handleRequest(req.url , req.method))

// Discriminated union 

type Circle = {
    kind : "Circle" , 
    radius : number 
}

type Square = {
    kind : "Square" , 
    length : number 
}

type Shape = Circle | Square 

const computeArea = (shape : Shape) : number => {
    //return Math.PI*shape.radius**2 ; This will not work because the radius property is discriminated 
    // It exists on only a part of the union and not on all types 
    if (shape.kind === "Circle"){
        return Math.PI*shape.radius**2 
    }
    return shape.length*shape.length ; 
}

