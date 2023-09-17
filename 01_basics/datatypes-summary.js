//Primitive data type

//7 types: String, Number, Boolean, null, undefined, Symbol, Bigint

//Examples

const score = 100           //number
const scoreValue = 100.7   // number

const isLoggedIn = false   //boolean
const outsideTemp = null   //null (type is null but it shows object)
let userEmail  //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 468941660985325364213561n  //n used to make it big int



// Reference (Non Primitive data types)    --all are kind of object

//Array, Object, Functions

//object (array)
const heros = ["doremon","ninja hattodi","dora"]

//object (Object)
let myObj = {
    name: "Anand",
    age: 19,
}

//object (object function)
const myFunction = function(){
    console.log("I am Function")
}


// console.log(typeof myObj)

// https://262.ecma-international.org/5.1/#sec-11.4.3 make sure you read the types of val and its result as per interview perspective


// Memory => Stack (Primitive) , Heap (Non-Primitive)

// In stack you get a copy of the dat whereas in Heap you get a reference of the data

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//Below is the diagram for the above stack and heap
//https://drive.google.com/file/d/12Yjnu8GsoN4E9qaJ5ZXS53r4q5nTeSgT/view?usp=sharing