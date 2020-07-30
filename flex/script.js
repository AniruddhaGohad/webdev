// VARIABLES
// 1.
var age; // NEVER USE THIS 

// 2.
let age; // USE LET IF CONST NOT POSSIBLE
// above variable are declared but undefined.
// when variables are not defined they have a default value = undefined.

// DIFFERENCE BETWEEN NOT DEFINED AND UNDEFINED.
// NOT DEFINED MEANS => VARIABLE NOT PRESENT/DECLARED.
// UNDEFINED MEANS => VARIABLE IS PRESENT/DECLARED BUT NO VALUE.

// CONSTANTS => USE WHEREVER POSSIBLE
const PI = 3.14;

// DATATYPES IN JS
let num = 5 // NUMBER
let decimal = 5.5 // NUMBER
let string = 'this is a string' // STRING
let stringTwo = `this is a string` // TEMPLATE STRING (USE THIS)
let boolean = true // false // boolean
let undefinedVar = undefined; // undefined.
let nullVar = null; // null

// COLLECTION DATATYPES
let array = [1, 1.5, `str`, true, undefined, null, [1,23, 3]]
let object = {
    name: "Aniruddha",
    age: 28,
    degrees: ['MCA', 'BCS', 'SSC', 'HSC'],
    address: {
        street: 'paud road',
        city: 'pune',
        zipcode: 411004
    }
} // MAP/HASHMAP/JSON

// arithmetic using javascript

let number = 15
let secondNumber = 5

let addition = number + secondNumber;
let subtraction = number - secondNumber;
let multiplication = number * secondNumber;
let division = number / secondNumber;

let remainder = number % secondNumber;
let exponent = number ** secondNumber;

// strings
let greeting = 'Helloo';
let name = 'Aniruddha';

let fullGreeting = `${greeting} ${name}`; // CONCATENATION.
let array = greeting.split() // create an array of all characters
// array = ['H', 'e', 'l', 'l', 'o', 'o']

let eSplit = greeting.split('e');
// eSplit = ['H', 'lloo']
let length = greeting.length;

// conditional operators
// ==, >=, >, <=, <, !=
// COMPARE LHS TO RHS and return a boolean (true or false)
let age = 19;
let isEligible = age >= 18; // true

// ===, !==
// these operators not only compare values but also datatypes.

let age = '19'; // string
let personAge = 19; // number

age == personAge; // true
age === personAge; // USE TRIPLE EQUAL TO EVERY TIME.

// COMMON PITFALLS
[1,2,3] === [1,2,3]; // false, true
// 1000 ===  1001
// 1. ARRAY COMPARISONS ALWAYS RETURN FALSE!

// {} === {}; // FALSE

if (5 > 3) {
    console.log('5 IS GREATER THAN 3');
} else if (5 > 4) {
    console.log('5 IS GREATER THAN 4')
} else {
    console.log('5 IS THE GREATEST NUMBER EVER')
}

if (5 > 3 && 7 < 6) {
    console.log('abcd')
}

// year is completely by 4 unless div by 100 then not unless div 400 

// for & while.

let counter = 0
while(counter < 10) {
    console.log(counter);
    counter++;
}

// 1st FOR LOOP

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// 2nd of FOR LOOP => FOR IN LOOP
// DOES NOT BEHAVE LIKE PYTHON FOR IN LOOP

let friends = ['Sumant', 'Ishaan', 'Ambareesh', 'Aniruddha']
let friend = {
    name: "akjgh",
    age: 19,
}

for(let index in friend) {
    console.log(index);
}

// FOR OF LOOP

for(let friend of friends) {
    console.log(friend);
}

// functions
// TRADITIONAL FUNCTION
function displayGreeting(name) {
    console.log(`Hellooooo, ${name}`);
}

displayGreeting('Aniruddha')

// VARIABLE FUNCTION
const displayName = function(name) {
    console.log(name);
}

displayName();

// ARROW FUNCTION === USE THIS EVERYWHERE
const displaySurname = (surname) => {
    console.log(surname);
}

// write function which accepts 2 arguments name and surname and logs heellooo name surname
// FAT ARROW FUNCTION
// CONSOLE.LOG
// BACK TICKS ``;

const numbers = [1, 3, 5, 7, 9, 11, 13 , 15, 17];
const runs = [50, 12, 45, 98, 150, 32]

const addNumbers = (array) => {
    let sum = 0;
    for(let number of array) {
        sum += number;
    }

    return sum;
}

console.log(addNumbers(runs))