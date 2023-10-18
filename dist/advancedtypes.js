"use strict";
// Intersection type
function drawSquare(param) {
    console.log(`Color is ${param.color}`);
    console.log(`Length & Width is ${param.dimension}`);
}
drawSquare({ color: "red", dimension: 30 });
let d = [{ name: "Jen" }, { name: "Robin" }];
// Typeguards
console.log(typeof (d));
let var1 = 50;
console.log(typeof (var1));
const cow = {
    walk: () => console.log("The cow is walking")
};
const bird = {
    fly: () => console.log("The bird is flying")
};
function move(animal) {
    if ("walk" in animal) {
        return animal.walk();
    }
    return animal.fly();
}
move(bird);
class Dog {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    run() {
        console.log(this.name + ' is running');
    }
}
class Dogs {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    run() {
        console.log(this.name + ' is running');
    }
}
let dog1 = new Dog("Bosco");
dog1.run();
console.log(dog1 instanceof Dogs);
let products = document.querySelector('.products');
let addProducts = document.querySelector('.add-product');
let phone_no = 798989;
let no = 987987;
console.log(products);
// Optional chaining
let prod_form = document.querySelector('.create-product-formiuyiy');
prod_form === null || prod_form === void 0 ? void 0 : prod_form.addEventListener("submit", (e) => {
    console.log("this is the form");
});
// Null coalescing
let var2 = "I was printed first";
let var3 = var2 !== null && var2 !== void 0 ? var2 : "This is printed";
console.log(var3);
function returnObject() {
    let var5 = {
        name: "Steve",
        age: 10
    };
    let var6 = null;
    return var6 !== null && var6 !== void 0 ? var6 : var5;
}
console.log(returnObject());
