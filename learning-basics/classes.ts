interface Pingable{
    ping() : void
}

class TestClass implements Pingable{
    readonly name : string = "My TestClass" ; 
    age! : number ; 

    //Overloading. Multiple constructor implementation is not allowed
    constructor(message : string , content : string)
    constructor(otherName ?: string){
        if (otherName !== undefined){
            this.name = otherName //Name can only be reassigned within a constructor
        }
    }

    ping(){
        console.log("I am pinging") ; 
    }

}