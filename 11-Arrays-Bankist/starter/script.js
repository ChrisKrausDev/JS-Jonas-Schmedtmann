'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//t///////////////////////////////////////////////
//t LECTURES


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//t 140 - simple array methods

//q slice method

/*

slice()

    return a new array 
    does not mutate an array
    creating shallow copy of any array


*/ 

let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2)); // ["c", "d", "e"]
// console.log(arr.slice(2, 4)); // ["c", "d"] index(4) is not included! 

// console.log(arr.slice(-2)); // ["d", "e"]
// console.log(arr.slice(-1)); // ["e"]
// console.log(arr.slice(1, -2));

// console.log(arr.slice()); // shallow copy
// console.log([...arr]); // same result

//q splice() method

/*

  zmienia oryginalną tablicę 
    (wybrane za pomocą tej metody elementy są usuwane z tablicy!)

  stosowana do usuwania konkretnych elementów z tablicy

*/

// // console.log(arr.splice(2)); // ["c", "d", "e"]
// // console.log(arr); // ["a", "b"]

// arr.splice(-1);
// console.log(arr); // ["a", "b", "c", "d"]

// arr.splice(1, 2); // zacznij od elementu o indeksie 1 i usuń 2 kolejne elementy

// console.log(arr); // efekt powyższego: ["a", "d"]

//q reverse() 

/*

  zmienia tabele! 

*/ 

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

//q concat() 

// nie zmienia tablicy

// const letters = arr.concat(arr2); // (arr2) is passed into the arr 

// console.log(letters); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

// console.log(...arr, ...arr); // a b c d e a b c d e
// console.log([...arr, ...arr]); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

//q join() 

// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

//t 141 looping arrays: forEach 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {

// but if we need a counter: 

for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// entries() another method, it returns an array of arrays which in first position contains a current index and then the value itself - this is how we access a counter variable in the for of loop

console.log('------------ forEach ---------------');

/* 

when to use? 

  continue
  break

those statements dosen't work with forEach() !

*/ 

//  to get the same efect:

// with counter: the callback function passes also index and array. 

movements.forEach(function(movement, index, array) { 
  if(movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// forEach() is higher order function

// the function passed as a parameter is a callback function, which will be executed by every iteration and it will pass in the current element of the array as an argument

// 0: function(200)
// 1: function(450)
// 2: function(400)

