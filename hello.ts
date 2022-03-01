// A simple program providing everything needed to kickstart development with typescript 

enum user {
    age = 20 , 
    gender = "Female" , 
    name  = "Folashade Adeleke"
} 

const greetUser = (userName : string) : string => `Hello ${userName} ` 

let amount : number = 450 

let isOld : boolean = false 

let fast : any 

let sayHello = () : void => console.log("Hello , World")

interface State {
    name : string , 
    capital : string
} 

const state : State = {
    name : "Lagos" , 
    capital : "Ikeja"
} 

const items  : string [] = ["Mango" , "Pawpaw"] 

items.map(item => {
    console.log(item)
}) 
let selector      = (element : string) : any => document.querySelector(element) 
let selectAll     = (element : string) : any => document.querySelectorAll(element) 
let createElement = (element : string) : object => document.createElement(element) 

class NaijaStates {
    static isTribalistic : false
    private name : string  = "a" ; //This line was throwing error since I did not pass a value for the name which is private
    capital : string ;
    constructor(capital : string){ 
        this.capital = capital
    }
    echoName() : string {
        return this.name 
    }
    setName(name : string) : string {
        return this.name = name 
    }
}

const awka  = new NaijaStates("Awka") 
awka.setName("Anambra")
selector("#app").textContent = NaijaStates.isTribalistic ? "They are not tribalist" : "They are tribalist"

class Point {
    x : number ; 
    y : number ;
    constructor(x : number , y : number){
        this.x = x 
        this.y = y 
    }
    add(point : Point){
        return new Point(this.x + point.x  , this.y + point.y)
    }
}

class Point3D extends Point {
    z : number 
    constructor(x : number , y : number , z : number){
        super(x , y) 
        this.z = z
    }
    add(point : Point3D){
        let point2d = super.add(point)
        return new Point3D(point2d.x , point2d.y , this.z + point.z)
    }
}


