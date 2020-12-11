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


// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas'; // var - undefined
// let job = 'teacher'; // TDZ
// const year = 1991; // TDZ

// // Functions
// // console.log(addDecl(2, 3)); // it works before declaration
// // console.log(addExpr(2, 3)); // like const var - TDZ
// // console.log(addArrow(2, 3)); // like const var - TDZ

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) deleteShoppingCart(); // because of hoisting it will delete all products! 'numProducts' it a var! undefined = false

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deletaed!')
// }

// var x = 1; 
// let y = 2;
// const z = 3;

// console.log(x === window.x); 
// console.log(x === window.y);
// console.log(x === window.z);

// todo the this keyword in practice

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear)
//     // console.log(this); // we are in 'strict mode' so it will show 'undefined' in sloopy mode it'll be a global object, because the normal function get it own this keyword
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this); // with arrow function it shows window!!!! / global object / 
    
//     // the arrow function does not get its own 'this' keyword, so instead the arrow function simply uses the lexical this keyword which meands that is uses the this keyword  of it's parrent function or of its parents scope.

    //fixme the this keyword in the parent's scope of this function it's a WINDOW (window is the this keyword in a global scope like cl at 99 line!) SO 'this' in the 109 line points to the this in 99 line GLOBAL

    // arrow function doesn't get it own this keyword
// };
// calcAgeArrow(1980);

// this keyword in a method. When we have a method call, the this keyword insight of the method will be the object that is calling the method.

// in this case it's a jonas object. Jonas object is the owner of the method.

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this); // inside of calcAge 'this' is 'jonas' so we can use it like below:
//         console.log(2037 - this.year);
//     }
// }
// jonas.calcAge() // so thanks this.year in line 127 we don't neet do pass 1991 to the function call - jonas.calcAge(1991)

// // jonas object is a 'this' in this example because it was the obect which was calling that method. It's make a difference...:

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); // now the this point to matilda, nom matter that the this keyword was written in a jonas object - the this keyword is dynamic not static. It's depends on how the function is called

// const f = jonas.calcAge // without calling it ()
// f(); // 11 minuta - wyjaśnienie. Now the this is undefined (undefined.year) it happends because the f() is now just a regular function call. It is not attached to any object. There is no owner of this F function anymore here at this point

// // It's just the regular function call just like here.

// // todo regular function vs arrow functions
// todo video 98 

// the best practice is never use a arrow function as a method. Even when u dosen't use a 'this' keyword in a particular method. Using normal function expression will prevent u from mistakes like below:

// var firstName = 'Matilda'; // using var to declear a variable it will create a global object that will be use as 'this' in our example, which may cause an error in the program

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         console.log(this); // inside of calcAge 'this' is 'jonas' so we can use it like below:
//         console.log(2037 - this.year);
//     },

//     // greet: function() { // working fine!
//     greet: () => { // showing Matilda! Wrong!!
//         console.log(this); //it's a window object
//         console.log(`Hey ${this.firstName}`)
//     },
// };

// jonas.greet(); // cl => 'Hey undefined', because the arrow function dosen't get it own 'this'... it will simply use the this keyword from its surroundings

// // it parrents the keyword - the parent scope of this greet method is the global scope

// // jonas object it's not a code block, so it dosen't create it's own scope. It's simply object literal. So all inside is in the global scope

// console.log(this.firstName);

// // so in this case 'this' is a window object and in windows object there is no firstName - and so we get undefined

// todo another pitfall

// when we have a function inside a method:
// solution 1: pre ES6

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);

//         const self = this; // line 200 - expl

//         const isMillenial = function() {
//             // console.log(this.year >= 1981 && this.year <= 1996);
//             // Cannot read property 'year' of undefined
//             // at isMillenial - this is undefined!

//             console.log(self.year >= 1981 && self.year <= 1996);
//             // instead of using this, we can use a self variable!
//         };
//         isMillenial(); // this is a regular function call, so 'this' must be undefined. So 'this' is also undefined in 190 code line. Some think that this is a JS bug, but it's not. It's how this keyword works.

//         // todo it's a clear rule that a regular function call has the this keyword set to undefined. Two solution to solve that problem:

//         // 2 // pre ES6 solution: using extra variable usualy called self or that - outside of the function - line 189 where we still have to this keyword set to 'jonas' Example at the 224 line


//     },

//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     },
// };

// jonas.greet();
// jonas.calcAge();

// solution 2: 

// working fine with the arrow function in line 228 because the arrow function uses the 'this keyword' from it's parent scope, and it parent scope is jonas object.

    // arrow function inherits the 'this keyword' from the parent scope. AND THAT IS EXACTLY WHAT WE NEED HERE 

const jonas2 = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(2037 - this.year);

        const isMillenial = () => { 
            console.log(this)
            console.log(this.year >= 1981 && self.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
}

jonas2.greet();
jonas2.calcAge();

    // arguments keyword // its not so important in modern JS 

// functions get access not only to the 'this keyword' but also to the 'argument keyword' and the 'argument keyword' is only available in regular functions

const addExpr = function (a, b) {
    console.log(arguments);
    return a+ b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};
addArrow(2, 5, 8);

