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

/*

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

*/

//fixme 130 functions returning functions

// its working because of 'closures'

/* 

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven

greet('Hello')('Jonas'); // Hello Jonas

// challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

*/

//fixme 131 The call and apply Methods 



const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    // book: function() {} - old way, and new way below:
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
    this.booking.push({flight: `${this.iataCode}${flightNum}`, name})
    },
};  

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(634, 'John Smith');
console.log(lufthansa);

    // the 'this' keyword points on lufthansa object itself, because that's the object on which the book method on the 283 line was called.

 const eurowings = {
     airline: 'Eurowings',
     iataCode: 'EW',
     booking: [],
 };

    // we want to use same book method from lufthansa on eurowings object - without writing it one more time - DRY soooooo: 

 const book = lufthansa.book; 

    // we can store the book() function from lufthansa in new variable called book

    // first class functions

//todo call() method 

//  book(23, 'Sarah Williams') 

    // it dosen't work! It's now just regular function call, and in regular function call the 'this' keyword points to undefined!! (at least in strict mode) 

    // so we need to tell JS explicitly what the this keuword here should be like. There are three function methods to do that: call, apply and bind:

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

    // a function is really just an object and object have methods and therefore, function can have methods to, and the call method is one of them

    // in a call() method the first arg is what we want the this keuword to point to

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking: [],
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//todo apply() method 

    // works the same as a call() method, with this difference that the apply() does not recive a list of arguments after the this keyword but instead it's gonna take an array of the arguments:

const flightData = [582, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

    // it is no more used in modern JS, because it is a better way like below, it will do this same as that abowe

book.call(swiss, ...flightData);



//fixme 132: the bind method 

    // bind() does not immediately call the function - it returns a new function, where this keyword is bound. It is set to whatever value we pass into bind

// book.call(eurowings, 23, 'Sarah Wiliams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

    // here, we dont need do specify the this keyword

const bookEW23 = book.bind(eurowings, 23);

    // we can store new function, specify only for flight nr 23 from eurowings by starting defining the list on parameters and setting the first one to 23

    // so the bookEW23 function needs only the name! flight number is already defined

bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper'); 

    // Specifying parts of the argument beforehend is actually a common pattern called partial application, which means that a part of the arguments of the original function are already applied, already set

//todo practice example: using objects with event listeners: 

lufthansa.planes = 300;

    // adding a new property to lufthansa (planes: 300)

lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

    // we want to add a new plane whenever we click on button

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

    // it's loggs NaN - because an event handler function the this keyword always point to the element on which that hendler is attached to.

    // 'lufthansa.buyPlane' - hendler function, is attached to 'document.querySelector('.buy')' this element

    // so inside lufthansa.buyPlane the this keyword point to the button element

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

    // we need to pass in a function in 'luftha nsa.buyPlane', and we already know that the call method calls the function (that is not what we need), therefore we use bind() - because the bind() will gonna return a new function

//todo partial application 

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

    // function that calculate a taxes

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

    // function to calculate taxes with fix rate at 23% for VAT. First parameter set where the this keyword is pointed to. In this usecase we don't have this keyword so we writing null! 

console.log(addVAT(100));
console.log(addVAT(300));

    // challenge - creating a function calling another function that working this same as with the bind() method:

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));