// let car = {
//     model : "Audi",
//     fuel_consumption : "12KM/L",
//     color: "Black",
//     manufacture : 2022,
//     canHoot(){
//         console.log("Hooting ...");
//     },
//     canFuel(){
//         console.log("Fueling ...");
//     }
// }

// let car2 = {
//     model : "BWM",
//     fuel_consumption : "14KM/L",
//     color: "White",
//     manufacture : 2021,
//     canHoot(){
//         console.log("Hooting ...");
//     },
//     canFuel(){
//         console.log("Fueling ...");
//     }
// }

// function user(username, password){
//     return {
//         name:username,
//         password: password
//     }
// }

// let user1 = user("Emmanuel", "12345678")
// let user2 = user("Sharon", "12345678")
// let user3 = user("Francis", "123456d78")

// console.log(user1);
// console.log(user2);
// console.log(user3);

// function createCar(model, consumption, color, manufacture){
//     return {
//         model : model,
//         fuel_consumption : consumption,
//         color: color,
//         manufacture : manufacture,
//         canHoot(){
//             console.log("Hooting ...");
//         },
//         canFuel(){
//             console.log("Fueling ...");
//         }
//     }
// }

// let car1 = createCar("SQ5", "15KM/L", "white", 2023)
// let car3 = createCar("E200", "13KM/L", "black", 2023)

// console.log(car1);
// console.log(car3);

// class

class Vehicle {
    
    constructor(model, fuel, manufacture, capacity){
        // this.color = color,
        this.model = model,
        this.fuel = fuel,
        this.manufacture = manufacture,
        this.capacity = capacity
    }

    #color;
    model;
    fuel;
    manufacture;
    capacity;

    canSpeed(){
        console.log("Speeding ...");
    }

    getColor(){
        console.log(this.#color);
    }

    setColor(color){
        this.#color = color
    }
}

let toyota = new Vehicle("Hilux", "Diesel", 2015, 5)

toyota.setColor("Red")

toyota.getColor();



class motorBike extends Vehicle{

    constructor(engine, horsepower, model, fuel, manufacture, capacity){
        super(model, fuel, manufacture, capacity)
        this.engine = engine
        this.horsepower = horsepower
    }

    engine;
    horsepower
}

let skygo = new motorBike("Piston", 150, "skygo", "petrol", 2023, 2)
// skygo._color = "blue"

// console.log(skygo);


// let mercedes = new Vehicle()
// mercedes.color = "Red"
// mercedes.model = "S550"
// mercedes.fuel = "Petrol"
// mercedes.manufacture = 2020
// mercedes.capacity = 5

// console.log(mercedes);

// let bmw = new Vehicle()
// bmw.color = "grey"
// bmw.model = "X6"
// bmw.fuel = "Petrol"
// bmw.manufacture = 2021
// bmw.capacity = 5

// console.log(bmw);

// let bmw = new Vehicle("Red", "BMW", "PETROL", 2022, 5)
// let audi = new Vehicle("Black", "Audi", "PETROL", 2023, 5)

// let desc = Object.getOwnPropertyDescriptor(bmw, "color")



// Object.defineProperty(bmw, 'model', {
//     writable : false
// })

// for(let prop in bmw){
//     console.log(prop);
// }

// Object.defineProperties(audi, {
//     'color':{
//         writable: false,
//         enumerable: false
//     },
//     'model':{
//         value: "A5"
//     }
// })

// bmw.model = "X6"
// audi.color = "Yellow"

// for(let props in audi){
//     console.log(props);
// }

// console.log(audi);