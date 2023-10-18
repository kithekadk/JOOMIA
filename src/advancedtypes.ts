// Intersection type

interface Colored {
    color : string
}

interface Square {
    dimension : number
}

type ColoredSquare = Colored & Square

function drawSquare (param: Colored & Square){
    console.log(`Color is ${param.color}`);
    console.log(`Length & Width is ${param.dimension}`);
}

drawSquare({color : "red", dimension: 30})

let d = [{name: "Jen"}, {name: "Robin"}]

// Typeguards
console.log(typeof(d));
let var1 = 50

console.log(typeof(var1));

// use of in
type Cow = {
    walk: ()=> void
}

type Bird = {
    fly: ()=>void
}

const cow: Cow = {
    walk: ()=> console.log("The cow is walking")
}

const bird: Bird = {
    fly: () => console.log("The bird is flying")
    
}

function move (animal: Cow | Bird){
    if("walk" in animal){
        return animal.walk()
    }

    return animal.fly()
}

move(bird)

// instance of

interface Animals{
    name: string;
    run(): void
}

class Dog implements Animals{

    constructor(name:string){
        this.name = name
    }

    name = ''

    run(){
        console.log(this.name + ' is running');
    }
}

class Dogs implements Animals{

    constructor(name:string){
        this.name = name
    }

    name = ''

    run(){
        console.log(this.name + ' is running');
    }
}

let dog1 = new Dog("Bosco");

dog1.run()

console.log(dog1 instanceof Dogs);


let products = document.querySelector('.products') as HTMLDivElement

let addProducts = <HTMLDivElement> document.querySelector('.add-product') 

let phone_no = <number> 798989
let no: number = 987987


console.log(products);


// Optional chaining

let prod_form = document.querySelector('.create-product-formiuyiy') as HTMLFormElement

prod_form?.addEventListener("submit", (e)=>{
    console.log("this is the form");
})

// Null coalescing

let var2 = "I was printed first"

let var3 = var2 ?? "This is printed"

console.log(var3);


function returnObject(){
    let var5 = {
        name: "Steve",
        age: 10
    }

    let var6 = null

    return var6 ?? var5
}

console.log(returnObject());
