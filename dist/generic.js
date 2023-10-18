"use strict";
// const lastItem = (array : Array<any>) =>{
//     return array[array.length - 1]
// 
const lastItem = (array) => {
    return array[array.length - 1];
};
let lastEl = lastItem([1, 2, 3, 4]);
let lastEl2 = lastItem(["a", "b"]);
console.log(lastEl);
console.log(lastEl2);
const lastItem2 = (array) => {
    return array[array.length - 1];
};
let lastObj = lastItem2([{ name: "name1" }, { name: "name2" }, { name: "name3" }]);
let lastString = lastItem2(["name1", "name2", "name3"]);
console.log(lastObj);
// An array that return an array of numbers or string
const createArray = (x, y) => {
    return [x, y];
};
let arrr1 = createArray(3, 5);
console.log(arrr1);
// using generic approach
const createArray2 = (x, y) => {
    return [x, y];
};
createArray2("string", 1);
// Overwriting the types
createArray2("john", 30);
// explicitly defining a type
const createArray3 = (x, y) => {
    return [x, y];
};
createArray3(45, "String");
// Extending types
const createName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
let user1 = createName({ firstName: "Daniel", lastName: "Kitheka" });
console.log(user1);
const createName2 = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
let user5 = createName2({ firstName: "Name1", lastName: "Name2", age: 26, height: '3m' });
console.log(user5);
class Pason {
    constructor(fname, lname, age) {
        this.first_name = "";
        this.last_name = "";
        this.age = "";
        this.height = "";
        this.first_name = fname;
        this.last_name = lname;
        this.age = age;
    }
}
let pasonx = new Pason("Robinson", "Ngecu", "20");
console.log(pasonx);
