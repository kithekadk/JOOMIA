"use strict";
let createProductForm = document.querySelector(".create-product-form");
let product_name = document.getElementById('product-name');
let product_description = document.getElementById('product-description');
let product_image = document.getElementById('image');
let product_price = document.getElementById('price');
createProductForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Submitted from typescript");
});
// Type annotation
let user10 = "Crispin";
// Type inference
let user20 = "Crispin";
/**
 * Reference types
 *
 */
// OBject type
let user;
user = {
    firstName: "Daniel",
    lastName: "kitheka",
    age: 50,
    jobTitle: "Dev"
};
let user2;
user2 = {
    firstName: "Dan",
    lastName: "kitheka",
    age: 50,
    jobTitle: "Dev"
};
// Array type
let tasks = [];
tasks = ["eat", "code", "sleep"];
let numbers = [];
numbers = [1, 2, 3, 4, 5];
let objectsArray;
objectsArray = [
    {
        todo_name: "Sleep",
        deadline: "31/12/2023",
        description: "kjghugug"
    },
    {
        todo_name: "Sleep",
        deadline: "31/12/2023",
        description: "kjghugug"
    },
    {
        todo_name: "Sleep",
        deadline: "31/12/2023",
        description: "kjghugug"
    },
    {
        todo_name: "Sleep",
        deadline: "31/12/2023",
        description: "kjghugug"
    }
];
// Tuple
let items;
items = [1, "Laptop", 2, "Phone"];
console.log(items.length);
// Enums
var Day;
(function (Day) {
    Day[Day["Mon"] = 0] = "Mon";
    Day[Day["Tue"] = 1] = "Tue";
    Day[Day["Wed"] = 2] = "Wed";
    Day[Day["Thur"] = 3] = "Thur";
    Day[Day["Fri"] = 4] = "Fri";
    Day[Day["Sat"] = 5] = "Sat";
    Day[Day["Sun"] = 6] = "Sun";
})(Day || (Day = {}));
var Status;
(function (Status) {
    Status[Status["pending"] = 0] = "pending";
    Status[Status["completed"] = 1] = "completed";
    Status[Status["deleted"] = 2] = "deleted";
})(Status || (Status = {}));
function getStatus(status) {
    if (status == Status.completed) {
        console.log("Congratulations");
    }
    else if (status == Status.pending) {
        console.log("Some task(s) are pending");
    }
    else {
        console.log("Task does not exist");
    }
}
getStatus(Status.completed);
// union types
let unionArray = [];
unionArray = [1, "daniel"];
// Literal tyepes
let gender;
gender = 'male';
let car;
car = "It jhhoil";
// Function types
let sum = function (a, b) {
    return a + b;
};
sum = function (x, y) {
    return x + y;
};
function addNumber(a, b) {
    return a + b;
}
// any
let x;
x = 1;
x = "Nyeri";
// never
// function errorFunction(){
//     throw new Error("Error from never function");
// }
// errorFunction()
