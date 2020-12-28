'use strict';

//fixme 126. Default Parameters 

/*

const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers
    // parameters can take any expression but => 

    // flightNum, 
    // price = 199 * numPassengers
    // numPassengers = 1, 

    // it dosen't working! we can not calculate numPassengers befor declaring

    ) {
    
    //todo Default parameters ES5 way:

    /* 

    const createBooking = function(flightNum, numPassengers, price) and then inside the { } function: 

    numPassengers = numPassengers || 1; // if numPassengers is falsy value (undefined is falsy) then set it as 1
    price = price || 199
    */

    //todo Default parameteres ES6:

    /* 
    const createBooking = function(flightNum numPassengers = 1, price = 199)
    
    

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

// createBooking('LH123'); // without default parameter: {flightNum: "LH123", numPassengers: undefined, price: undefined}

createBooking('LH123'); // with default parameters ES5 way: {flightNum: "LH123", numPassengers: 1, price: 199}

createBooking('LH123', 2, 800); // {flightNum: "LH123", numPassengers: 2, price: 800}

createBooking('LH123', 5); //{flightNum: "LH123", numPassengers: 5, price: 995}

createBooking('LH123', 1000) // if we want to declare only first and third parameter we can not to skip the second! numPassengers will be 1000! But we can do it like below:

createBooking('LH123', undefined, 1000); // {flightNum: "LH123", numPassengers: 1, price: 1000}

*/

//fixme 127. How Passing Arguments Works: Value vs. Reference 

/* 

passing arguments into functions (reference to the video primitives vs objects with calling reference or primitive types)

passing a primitive type is something as creating a copy outside of the function, so the value is simply copied:

const flightNum = flight;

BUT when we pass an object to a function it is really just like copying an object like

const passenger = jonas;

*/

const flight = 'LH234' // primitive type
const jonas = {         // reference type
    name: 'Jonas Schmedtmann',
    passport: 21315412
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name; // we are changing permanently the jonas object, because it's the same object in the memory heap 

    if(passenger.passport === 21315412) {
        alert('Checked in')
    } else {
        alert('Wrong passport!')
    }
}

// checkIn(flight, jonas);

// console.log(flight); 

    // PRIMITIVE TYPE - it shows 'LH234'! Why? By calling the function with flight parameter JS simply copies the flight variable into flightNum parameter:
    
    // flightNum = flight

    // and then the flightNum from 78 line is completely different variable. If we change it inside of the checkIn function it did not get reflected in the outside flight variable

console.log(jonas); 

    // REFERENCE TYPE - we changed it inside of the checkIn function but it is changed everywhere in our program

    // {name: "Mr.Jonas Schmedtmann", passport: 21315412}

    // because it is a reference type, what is copied is really just a reference to the object in the memory heap

    // it the same as this: 

    // const flightNum = flight;
    // const passenger = jonas;

//todo all this above can cause problems and bugs, when you working with another developers: 

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
    // when we are calling this function with jonas as a parameter, it will change the passport number of jonas permanently - (reference type)
}

newPassport(jonas); 
    //changing passport number BEFORE check in

// checkIn(flight, jonas); 
    // Wrong passport! We have here two functions manipulating the same object

//todo passing by value, passing by reference 

    /* 
    
    JS does not have passing by reference ONLY passing by value.
    Even though it looks like, it's passing by reference.

    In C++ u can pass a reference to any value instead of the value itself

    */ 

//fixme 128 First-Class and Higher-Order Functions

    /*

    fundamental property of the JS language:

    first class function is just a feature that a programming language either has or does not have. It's only a concept, all it meand that all function are only a values. There is no first class functions in practice.

    BUT the higher-order function does exist in practice: 

        //todo first class functions:
            - JS treats functions as first-class citizens
            - This means the functions are simply values
            - Functions are just another "type" of object
    
    It's working this way because functions are really just another type of objects in JS AND since objects are values functions are values too.

    That's why we can stored them in variables or object propetries like below:

        - FUNCTION EXPRESSION:
    const add = (a, b) => a + b;

        - OBJECT METHOD
    const counter = {
        value: 23,
        inc: function() { this.value++ }
    }
        - PASS FUNCTIONS AS ARGUMENTS TO OTHER FUNCTIONS

        - RETURN FUNCTIONS FROM FUNCTIONS

        - CALL METHODS ON FUNCTIONS
    counter.inc.bind(someOtherObject);

    //todo heigher-order functions

        - a function that recives another function as an argument, that returns a new funciton or both

        - this is only possible because of first-class functions

            1) FUNCTION THAT REVICES ANOTHER FUNCTION    

            const greet = () => console.log('Hey Jonas');
            btnClose.addEventListener('click', greet);

                addEventListener is a heiher-order function (because calling greet)

                The function that is passed in is a callback function, because te callback function will be called later by the heigher order function!

            2) FUNCTION THAT RETURNS NEW FUNCTION

                function count() {
                    let counter = 0;
                    return function() {
                        counter++
                    }
                }
            
                advanced...
    */

//todo EXAMPLES! 

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...other] = str.split(' '); // rest pattern
    return [first.toUpperCase(), ...other].join(' '); // spread operator
};

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`); // print out name properity: script.js:218 Transformed by: upperFirstWord
};

transformer('JavaScript is the best!', upperFirstWord); //let transform the input string using function (upperFistWord) this function is just like any value! That's why we are putting it without calling ()

transformer('JavaScript is the best!', oneWord);

    // in transormer() function we are puting a string a callback fucntion (oneWord). Callback - because we not calling them, we are telling the JS to call them later

const high5 = function() {
    console.log('HIGH5');
}

document.body.addEventListener('click', high5);

    // addEventListener - hight-order function
    // high5 - callback function

['jonas', 'martha', 'adam'].forEach(high5);