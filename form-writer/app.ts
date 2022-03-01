
type InputPlaceholder = string | number
type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement 


class DOM {

    fieldName : string 
    constructor(fieldName : string){
        this.fieldName = fieldName
    }
    selectField(selector : string){
        return document.querySelector(selector) as HTMLElement 
        //return <HTMLElement>document.querySelector(selector)
    }
    
    createFormElement(placeholder : InputPlaceholder , tag : string) : FormElement {
        const element = <FormElement>document.createElement(tag)
        if (typeof placeholder === "string"){
            element.value = placeholder
        }
        return element
    }
    createElement( tag : string) : HTMLElement {
        return <HTMLElement>document.createElement(tag)
    }

    attachElement(target : HTMLElement , child : HTMLElement) {
        return target?.append(child) //If the target does not exist then return null
        
    }
}


const App = new DOM("#app") 
const appArea = App.selectField("#app") 
const nameInput = App.createFormElement("Enter a word", "input") 
const formSection = App.createElement("section") 

formSection.className = "w-50" ; 

App.attachElement(appArea , nameInput)
