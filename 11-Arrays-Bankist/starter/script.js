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


// It's a good practice, to pass data into a function instaed in global scope. So we need to create a function simulating a movements in your bank account

const displayMovements = function(movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0 - in pig game

  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov} €</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/* 

insertAdjacentHTML accept 2 strings

  'afterbegin' - normal order
  'beforeend' - reversed order (new element will be added after the previous one, at the end of container)

innerHTML is similar to textContent. The differences: 

       textContent returns the text itself, while innerHTML returns everytjing includin the HTML

*/ 

// console.log(containerMovements.innerHTML); // it shown HTML that we just created! 

// poniżej podsumowanie stanu konta plus odsetki

const calcDisplaySummary = function(movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * 1.2/100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    }) // dodaje tylko odsetki od każdego depozytu ale tylko >= 1
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

const createUserNames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })  
};

createUserNames(accounts);

const calcDisplayBalance = function(movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};

// kalkulacja i wyświetlanie balance 

// Event handler 
//todo logowanie 

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // zapobiega odświeżaniu strony - domyślne zachowanie dla tego elementu
  // prevent form from submitting
  e.preventDefault() 
  console.log('LOGIN');

currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
console.log(currentAccount);

// sprawdzanie czy user istnieje oraz walidacja pinu

// if(currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
//   console.log('LOGIN');
// }

// ale można lepiej przy wykorzystaniu optional chaining: jeśli currentAccount istnieje to pisz currentAccount.pin - jeślnie nie ma takiego loginu to pisze undefined

if(currentAccount?.pin === Number(inputLoginPin.value)) {
  //todo Display UI and welcome message
  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`; // Welcome back, Jonas
  containerApp.style.opacity = 100;

  //todo Display movements 

  displayMovements(currentAccount.movements);

  //todo Display balance 

  calcDisplayBalance(currentAccount.movements);

  //todo Display summary

  calcDisplaySummary(currentAccount.movements);
}
});

// 16:27

//t///////////////////////////////////////////////
//t LECTURES

// t
// t


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {

// but if we need a counter: 

// for (const [i, movement] of movements.entries()) {
//   if(movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// entries() another method, it returns an array of arrays which in first position contains a current index and then the value itself - this is how we access a counter variable in the for of loop

// console.log('------------ forEach ---------------');

/* 

when to use? 

  continue
  break

those statements dosen't work with forEach() !

*/ 

//  to get the same efect:

// with counter: the callback function passes also index and array. 

// movements.forEach(function(movement, index, array) { 
//   if(movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// forEach() is higher order function

// the function passed as a parameter is a callback function, which will be executed by every iteration and it will pass in the current element of the array as an argument

// 0: function(200)
// 1: function(450)
// 2: function(400)

//t coding challenge $1 
//t                     

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//t
// const juliaDogs = [3, 5, 2, 12, 7];
// const kateDogs = [4, 1, 15, 8, 3];

// const checkDogs = function(arr1, arr2){
//   const array = arr1.slice(1, arr.length - 2);
//   const concatedArray = array.concat(arr2);
  
//   concatedArray.forEach(function(mov, i) {
//     let dogAge = mov >= 3 ? 'an adult' : 'a puppy';
//     console.log(`Dog number ${i + 1} is ${dogAge}, and is ${mov} years old`);
//  })

// };

// checkDogs(juliaDogs, kateDogs);
//t

//t 146: data transformation: map, filter, reduce 

/*

  map
    can loop over arrays, similar to forEach() but it will create a brand new array based on original array


  filter
    is used to filter for elements in the original array. Returns a new array based on the original array filtered with the any condition


  reduce
    used to boild down all elements of an array to create a single value


*/

//t 147 the map method 

/*

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov) {
//   return mov * eurToUsd;
// });

//  the same with arrow fucnction: 

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);
  
const movementsDecriptions = movements.map((mov, i) =>

  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
  );

console.log(movementsDecriptions);

*/ 

//t 149 computing usernames 

/*

// const user = 'Steven Thomas Williams'; // należy z imienia stworzyć inicjały: stw

// const username = user.toLowerCase().split(' ').map(function(name) {
//   return name[0]
// }).join('');

// const username = user.toLowerCase().split(' ').map(name => name[0]).join('');

// looping przez array, zapisywanie pierwszej litery z każdego wyrazu by uzyskać inicjały

// const username = user.toLowerCase().split(' ') - to daje tylko imiona i nazwisko jako array, z małych liter

// wszystko powyższe można łatwiej zapisać w tej formie: 

//fixme kontynuacja w linii 100

console.log(accounts); // username js, jd etc

//t 150 the filter method 

const deposits = movements.filter(function(mov) {
  return mov > 0; // wszystkie > 0 zostaną wpisane w deposits
});

console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits); // [200, 450, 3000, 70, 1300]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

*/

//t 151 the reduce method 

/* 

console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur 
// }, 0); // initial value

// or: 

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// max value for balance

const max = movements.reduce((acc, mov) => {
  if (acc > mov) 
    return acc;
  else
    return mov;
}, movements[0]);

console.log('max value of balance:' + max);

*/

//t coding challenge                                            

// map, filter, reduce

/*

const dogList = [5, 2, 4, 1, 15, 8, 3];
const dogList2 = [16, 6, 10, 5, 6, 1, 4];

const dogAgeConverter = (arr => arr
  .map(cur => cur <= 2 ? cur * 2 : 16 + cur * 4)
  .filter(cur => cur > 18)
  .reduce((acc, cur) => acc + cur) / arr.length
);

// ŹLE OBLICZA ŚREDNIĄ!!!! BO BIERZE ILOŚĆ EL W TABLICY Z PRZED .FILTER!!! 

console.log(dogAgeConverter(dogList));
console.log(dogAgeConverter(dogList2));

//todo guy solution 

const dogList = [5, 2, 4, 1, 15, 8, 3];
const dogList2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverangeHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18)
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return average; 
};
const avg1 = calcAverangeHumanAge(dogList);
const avg2 = calcAverangeHumanAge(dogList2);

console.log(avg1);
console.log(avg2);

 */

//t 153 the magic of chaining methods 

/*

// how much was deposid in accound in USD 

// const eurToUsd = 1.1;

// pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr); // tak można sprawdzić co nie gra
    return mov * eurToUsd
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
   
console.log(totalDepositsUSD);  

// how to find an error in pipeline? by using array parameter, that we can accec to in this callback function (mov, i, arr)

*/

//t coding challenge #3 

/*

const dogAgeConverter = (arr => arr
  .map(cur => cur <= 2 ? cur * 2 : 16 + cur * 4)
  .filter(cur => cur >= 18)
  .reduce((acc, cur, i, arr2) => acc + cur / arr.length)
);

const avg3 = calcAverangeHumanAge(dogList);
const avg4 = calcAverangeHumanAge(dogList2);

console.log(`psie lata, średnia: ${avg3} ${avg4}`);

*/

//t 155 find method 

// it will show first element of the array, that satysfies the conditions

// filter() will show all elements that satysfies the conditions

// it will not return a new array (filter() return new array)

/*

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); // -400

console.log(accounts); 

const account = accounts.find(acc => acc.owner === 'Jessica Davis'); 

console.log(account); // {owner: "Jessica Davis", movements: Array(8), interestRate: 1.5, pin: 2222, username: "jd"}

*/ 

// so it returns this particular one object
