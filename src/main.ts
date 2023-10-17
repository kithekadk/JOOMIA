let createProductForm = document.querySelector(".create-product-form") as HTMLFormElement;
let product_name = document.getElementById('product-name') as HTMLInputElement;
let product_description = document.getElementById('product-description') as HTMLInputElement
let product_image = document.getElementById('image') as HTMLInputElement
let product_price = document.getElementById('price') as HTMLInputElement

createProductForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    console.log("Submitted from typescript");
    
})

// Type annotation
let user10:string = "Crispin"

// Type inference
let user20 = "Crispin"

/**
 * Reference types
 * 
 */

// OBject type

let user : {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
}

user = {
    firstName: "Daniel",
    lastName: "kitheka",
    age: 50,
    jobTitle : "Dev"
}


// Array type
let tasks:string[] = [];

tasks = ["eat", "code", "sleep"]

let numbers : number[] = []
numbers = [1, 2, 3, 4, 5]

let objectsArray : {
    todo_name: string,
    deadline : string,
    description: string
}[]

objectsArray = [
    {
        todo_name : "Sleep",
        deadline: "31/12/2023",
        description: "kjghugug"
    },
    {
        todo_name : "Sleep",
        deadline: "31/12/2023",
        description: "kjghugug"
    },
    {
        todo_name : "Sleep",
        deadline: "31/12/2023",
        description: "kjghugug"
    },
    {
        todo_name : "Sleep",
        deadline: "31/12/2023",
        description: "kjghugug"
    }
]

// Tuple

let items : [number, string, number, string]

items = [1, "Laptop", 2, "Phone"]

console.log(items.length);


// Enums
enum Day {
    Mon,
    Tue,
    Wed,
    Thur,
    Fri,
    Sat,
    Sun
}

enum Status {
    pending,
    completed,
    deleted
}

function getStatus(status:Status){
    if(status == Status.completed){
        console.log("Congratulations");
    }else if(status == Status.pending){
        console.log("Some task(s) are pending");  
    }else{
        console.log("Task does not exist");
    }
}

getStatus(Status.completed);


// union types

let unionArray : (string | number)[] = []

unionArray = [1, "daniel"]

// Literal tyepes

let gender : 'male' | 'female'

gender = 'male'

// Type Aliases
type about = string

let car: about
car = "It jhhoil"

// Function types
let sum: (a:number, b:number)=> number = function(a:number, b:number){
    return a+b
}

sum = function(x:number, y:number):number{
    return x+y
}

function addNumber (a:number, b:number){
    return a + b
}

// any
let x:any
x =1
x = "Nyeri"

// never
// function errorFunction(){
//     throw new Error("Error from never function");
// }

// errorFunction()