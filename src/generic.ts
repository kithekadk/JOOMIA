type arr = string[]
type arr2 = Array<string>

// const lastItem = (array : Array<any>) =>{
//     return array[array.length - 1]
// 

const lastItem = <T>(array: Array<T>) =>{
    return array[array.length - 1]
}

let lastEl = lastItem([1,2,3,4])
let lastEl2 = lastItem (["a","b"])

console.log(lastEl);
console.log(lastEl2);

const lastItem2 = <T>(array: T[]) =>{
    return array[array.length - 1]
}

let lastObj = lastItem2([{name: "name1"}, {name: "name2"}, {name: "name3"}])
let lastString = lastItem2(["name1", "name2", "name3"])

console.log(lastObj);


// An array that return an array of numbers or string

const createArray = (x:number, y:number)=>{
    return [x, y]
}

let arrr1 = createArray(3, 5)

console.log(arrr1);

// using generic approach
const createArray2 =<T, Y>(x:T, y:Y)=>{
    return [x, y]
}

createArray2("string", 1)

// Overwriting the types
createArray2<string, number>("john", 30)

// explicitly defining a type

const createArray3 = <Y, T = number>(x:T, y:Y) =>{
    return [x, y]
}

createArray3(45, "String")

// Extending types
const createName = (obj : {firstName: string, lastName:string}) =>{
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

let user1 = createName({firstName: "Daniel", lastName: "Kitheka"})

console.log(user1);


const createName2 = <T extends {firstName: string, lastName:string}>(obj : T) =>{
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

let user5 = createName2({firstName : "Name1", lastName: "Name2", age: 26, height: '3m'})

console.log(user5);


// Generics with Interfaces 
interface XY{
    height: number
}

interface YZ extends XY{
    weight: number
}

// class XYZ implements YZ{

// }

interface Persons <T> {
    first_name: string,
    last_name: string,
    age: T
    // car :{
    //     wheels: number,
    //     fuel:string
    // }
}

type NumberAge = Persons<number>

type StringAge = Persons<string>
 
class Pason implements StringAge{

    constructor(fname:string, lname:string, age:string){
        this.first_name = fname
        this.last_name = lname
        this.age =age
    }
    first_name= ""
    last_name = ""
    age = ""

    height = ""
    

}

let pasonx = new Pason("Robinson", "Ngecu", "20")

console.log(pasonx);
