// # Primitive

// 7 types : String, Number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

//const bigNumber = 134412342134123443434334n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj"]
let myObj = {
    name: "Vatsal",
    age: "20",
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof anotherId);


///+++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive) (memory)

let myYoutubename ="Vatsaldotcom"
let anothername =myYoutubename
anothername = "asdf"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
 }

 let userTwo = userOne
 
 userTwo.email = "vatsal@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);