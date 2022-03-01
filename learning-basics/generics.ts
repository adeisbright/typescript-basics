const identity = <Type>(arg : Type) : Type => {
    return arg
}

const output1 = identity<string>("Hello Bobo") 
const output2 = identity<number>(45) 
const output3 = identity<number []>([2 , 3 , 5])
const output4 = identity("Come Home") //Argument Type inference 

console.log(output1) 
console.log(output3)

// This generic printContent can work on an array of any type 

const printContent = <T>(content : Array<T>) : Array<T> => {
    content.map((e) => console.log(e)) 
    return content ; 
}

printContent([1 , 3 , 4]) 

//Generic Types 
const myIdentity : <Type>(arg : Type) => Type = identity ;
console.log(myIdentity(45))

//Generic Interface 
// With this , we can define how we want to use the function and pass in the arguments
interface GenericIdentifyFn<Type>{
    (arg : Type) : Type  ; 
}

const anotherIdentify : GenericIdentifyFn<string> = identity ; 
console.log(anotherIdentify("Hello"))

// Generic Classes 
// class GenericNumtype<NumType> {
//     zeroValue : NumType; 
//     add: (x : NumType , y : NumType) => NumType
// }

// let genericNum = new GenericNumtype<number>() 
// genericNum.zeroValue = 0 ; 
// genericNum.add = (x , y) => x + y ; 

interface LengthWise {
    length : number
} 

const logger = <Type extends LengthWise>(arg : Type) : Type => {
    console.log(arg.length) 
    return arg 
}
logger("Hello") //This function can work with String , Array , objects with length propert

// Using Types in Generic constraints 

const getProperty = <Type  , Key extends keyof Type>(obj : Type , key : Key) => {
    return obj[key]
}

let x = {a : "40" , b : "Cinema"} 

// This will cause an error because c is not a key in x getProperty(x , "c")

type Pointer = {x : number , y : number} 

type P  = keyof Pointer 


const f = () => {
    return {
        x : 40 , 
        msg : "Hello"
    }
}
//ReturnType checks the return value of a function 
// typeof makes a Type to be same as a particular type typeof Hello means 
// I can assign data of Hello type to the variable 

type Check = ReturnType<typeof f> 
const c : Check = {
    x : 69 , 
    msg : "How are you doing"
}

type Country = {name : string , gdp : number , resources: string []}

type CountryName = Country["name"] //An indexed access type 
type I2 = Country[keyof Country] 
const i2 : I2 = ["Sylvester"]

type Greeting = "Hello World" 
type QuietGreeting = Lowercase<Greeting>
