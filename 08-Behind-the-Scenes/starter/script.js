'use strict';

//todo SCOPE SCOPE SCOPE SCOPE CHAIN ETC...

// function calcAge(birthYear) { // this function is define in global  scope / top level code. This function create it's own scope:
//     const age = 2037 - birthYear;
//     console.log(firstName); //this variable "firstName" is not in the scope of the CalcAge funciton, by execution js didn't find this variable in function scope so it did a variable lookup, where it looked up in the scope chain to see if it found the var there. And indeed parent scope of the calcAge function is the global scope, and the firstName vat is in there!

//     function printAge() {
//         // new scope
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         // it take the 'age' var from parent sciope (calcAge function) this same as 'birthYear'

//         // by 'firstName' 1) printAge() scope? - no! next to calcAge() scope? - no! next to global scope? Yes, there it is!
//         console.log(output); 

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Steven'; // its change the name by 'str' because JS looks for a value in a current scope

//             // but in a printAge() function it will still take Jonas as a 'firstName' becauof of the variable lookup in a scope chain 
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);
//             // all working fine

//             function add (a, b) {
//                 // scope for this function is only the block scope of the if statement!
//                 return a + b;
//             }

//             output = 'NEW OUTPUT!' // redifyning the 'output' variable
//             // const output = 'NEW OUTPUT' // creating a new variable
//         }
//         console.log(millenial); //todo with the var millenial it works because var ignores the block sope and this type of variables if function scoped

//         // add(2, 3); // error! add is not defined! (only in strict mode)

//         // console.log(str); // here the 'str' is out of the scope! no access to the if statement scope block! 

//         console.log(output); // redifyned a variable output from the 11
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas' // global variable
// calcAge(1991);

// // console.log(age) // here we have no access to the 'age' var - scope chain is one way street - only inner scope have access to the variables of its outer scope

//todo hoisting


// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas'; // var - undefined
let job = 'teacher'; // TDZ
const year = 1991; // TDZ

// Functions
// console.log(addDecl(2, 3)); // it works before declaration
// console.log(addExpr(2, 3)); // like const var - TDZ
// console.log(addArrow(2, 3)); // like const var - TDZ

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart(); // because of hoisting it will delete all products! 'numProducts' it a var! undefined = false

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deletaed!')
}

var x = 1; 
let y = 2;
const z = 3;

console.log(x === window.x); 
console.log(x === window.y);
console.log(x === window.z);