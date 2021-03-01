'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-01-27T19:01:17.194Z',
    '2020-01-11T23:36:17.929Z',
    '2021-02-19T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

//todo wyświetlanie daty lub today, yesterday and so one:

const formatMovementDate = function (date, locale) {
  
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  
  // else {
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() +1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // } //fixme - replace with new, nicely formated date 

  return new Intl.DateTimeFormat(locale).format(date);
}; 

const formatCur = function(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //todo showing the movements dates by each movement by looping over two arrays at the same time, using current index of the forEach() method: 

    const date = new Date(acc.movementsDates[i])
    // converting strings in acc.movementsDates into js object because only then we can work with this data

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  
  // `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency)
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//todo logoutTimer: 

const startLogOutTimer = function(){
  const tick = function() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    
    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer)
      labelWelcome.textContent = `Log in to get started`
      containerApp.style.opacity = 0;
    }

    // Dsecrese 1s
    time--;
  };

  // Set time to 5 minutes 
  let time = 120;

  // Call the timer every second (with 1000 that means this callback will be executet every second) 

  // Problem - the functions is executed after one second! We can see it on the website, we have to put the callback function to separate function and call it immediately. Give name 'tick' to the callback and put it into startLogOutTimer function()

  tick() //todo calling this function here solves the problem 
  const timer = setInterval(tick, 1000);
  return timer;

};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// we need to return timer, and then declare it globaly to presist between different logins

//todo fake always logged in 

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100; 

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount.locale);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //todo create current date and time shown after login


    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short'
    };

    // const locale = navigator.language;
    // console.log(locale); // en-US and using ths variable as at the bottom we can change time formatting depending on the language we use in browser

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale, 
      options
    ).format(now);

    // console.log(currentAccount.locale);

    // const day = `${now.getDate()}`.padStart(2, '0');

    //   // padStart(2, '0') - string `${now.getDate()}` - string ma się składać z 2 znaków, jesli składa się z jednego, wstaw na początku '0' (samo 0 też jest ok). Jeśli string będzie już np 12, to wtedy zero nie będzie dodane 

    // const month = `${now.getDate() +1}`.padStart(2, '0');; // it is 0-11! 0 - January 
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const min = `${now.getMinutes()}`.padStart(2, '0');
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // what we need to display: day/month/year, hours:minutes

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //  Timer

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset Timer (after two possible activities)
    clearInterval(timer);  
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    
    setTimeout(function(){
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset Timer (after two possible activities)
      clearInterval(timer);  
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*

// all numbers ar represents by floating points numbers:
// numbers are represented also in 64 base 2 format - always in binary form! And that couses errors! 

console.log(23 === 23.0); //  true
console.log(0.1 + 0.2); //  0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false!!!!  

//  conversion string to number: 
console.log(Number('23'));
console.log(+'23'); //  the same result!

// parsing, redix - second arg is for system liczbowy 10 albo 2
console.log(Number.parseInt('30px', 10)); // will figure out the number from that string! But the string must start with the number 

console.log(Number.parseInt('a23', 10)); // NaN

console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat(' 2.5rem  ')); // 2.5 - white space - egal

console.log(Number.isNaN(20));      // false
console.log(Number.isNaN('20'));    // false
console.log(Number.isNaN(+'20X'));  //  true
console.log(Number.isNaN(23 / 0));  // false 
//  ta metoda wyrzuca błędy więc do sprawdzenia czy dany input jest number lepsza jest: 

// isFinite() checking if value is a number 

console.log(Number.isFinite(20));     //  true
console.log(Number.isFinite('20'));   // false
console.log(Number.isFinite(+'20X')); // false
console.log(+'20X'); // NaN
console.log(Number.isFinite(23 / 0)); // false 

console.log(Number.isInteger(23));    //  true
console.log(Number.isInteger(23.0));  //  true
console.log(Number.isInteger(23 / 0));// false

*/ 

//t number, data, intl and timers 

/*

// math operators

console.log(Math.sqrt(25)); // 5 bo do 2
console.log(25 ** (1 / 2)); // 5 bo do 2 
console.log(8 ** (1 / 3));  // 2 bo do 3

// max min value

console.log(Math.max(5, 15, 33, 112));   // 121
console.log(Math.max(5, 15, 33, '112')); // 121
console.log(Math.max(5, 15, 33, '112px')); // it does not parse -> NaN

console.log(Math.min(5, 15, 33, 112)); // 5 

// constans, to calc the radius of a circle with 10px:

console.log(Math.PI * Number.parseFloat('10px') ** 2);

//todo random function!!! 

console.log(Math.trunc(Math.random() * 6) + 1); // with trunc we remove decimal part from this rendom generated number 

const randomInt = (min, max) => 
  Math.floor(Math.random() * (max - min) + 1) + min;
//fixme 0...1 -> 0...(max - min) -> min...max 
//  tego fragmentu Saszka nie paniemaju 

console.log(randomInt(10, 20));

// Rounding integers 

console.log(Math.trunc(23.3)); // 23 - trunc() removes any decimal parts

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24 to closest 

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24 to up

console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.9')); // 23 to down, and it's do type conversion

console.log(Math.trunc(-23.3)); // -23 only del dec part
console.log(Math.floor(-23.9)); // -24 also runded to down! 

// Rounding decimals 
console.log((2.7).toFixed(0)); //  toFixed always return a string! 
console.log((2.7).toFixed(3)); // 2.700 with 3 decimal parts 

console.log((2.345).toFixed(3)); // 2.345
console.log(+(2.345).toFixed(2)); // 2.35 - but now it's a number! 

*/

//t 170 remainder operator! 

/*

console.log(5 % 2); // 1

// even or odd?

const isEven = n => n % 2 === 0;
console.log(isEven(8)); //  true
console.log(isEven(1)); //  false

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function(row, i) {

    // 0, 2, 4, 6   
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    //  to convert a node list (not real array) to array, use spread operator. (spread this node elements into this array)

    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

*/

//t 171 working with bigInt

/*

// spetial type of intigers 

// number are represent as 64 bits (64 1's or 0's)
// from those 64 bits only 53 are stored to represent digits itself - rest is for storing position of decimal point and the sign. If there is only 53 bits for any number so there is a limit of how big this number can be...

console.log(2 ** 53 - 1); // 9007199254740991 - 1 becaudse the number starts at 0

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// powyżej tej liczby, moga występować problemy z dokładnością liczenia 

//todo bigInt 

console.log(40985309485093850984309583094850934); // 4.098530948509385e+34

console.log(9034950340958243508348680945834n); // 9034950340958243508348680945834n

console.log(BigInt(9034950340958243508348680945834)); //fixme to jest dupa, nie dzialła ale nie wiadomo czemu

// operations 

console.log(10000n + 10000n); // 20000n
console.log(938459843958439058309485093485n * 100000000000000000000000000000000000000000000000000444n);

const huge = 23840983249028304982390n
const num = 23;
// console.log(huge * num); // error! we have to convert num to bigint

// Exception
console.log(huge * BigInt(num));
console.log(20n > 15); //  true
console.log(20n === 20); // false 
console.log(typeof 20n); // BigInt
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

// Division
console.log(10n / 3n); // 3n - cut decimal parts 
console.log(10 / 3); //3.333333

*/

//t 172 Crating Dates [Dates in JS]

/*

const now = new Date();
console.log(now); // Fri Feb 19 2021 14:40:49 GMT+0100 (Central European Standard Time)

console.log(new Date('Feb 19 2021 14:41:13')); // based on this string JS creating: Fri Feb 19 2021 14:41:13 GMT+0100 (Central European Standard Time)

console.log(new Date('December 24, 2015')); // JS will parse this string to: Thu Dec 24 2015 00:00:00 GMT+0100 (Central European Standard Time) - //fixme not recommended


    // account1: 

    // {owner: "Jonas Schmedtmann", movements: Array(8), interestRate: 1.2, pin: 1111, movementsDates: Array(8), …}
    // currency: "EUR"
    // interestRate: 1.2
    // locale: "pt-PT"
    // movements: (8) [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300]
    // movementsDates: (8) ["2019-11-18T21:31:17.178Z", "2019-12-23T07:42:02.383Z", "2020-01-28T09:15:04.904Z", "2020-04-01T10:17:24.185Z", "2020-05-08T14:11:59.604Z", "2020-05-27T17:01:17.194Z", "2020-07-11T23:36:17.929Z", "2020-07-12T10:51:36.790Z"]
    // owner: "Jonas Schmedtmann"
    // pin: 1111
    // username: "js"
    // __proto__: Object

    // Z by end of the time string meand UTC 


//fixme but here is ok, because js was created this time string: 

// account1.movementsDates[0] = "2019-11-18T21:31:17.178Z" 

console.log(new Date(account1.movementsDates[0])); // Mon Nov 18 2019 22:31:17 GMT+0100 (Central European Standard Time)

//todo creating a date: 

// month is 0-11 - november = 10!!!! 

console.log(new Date(2037, 10, 19, 15, 23, 5)); //  Thu Nov 19 2037 15:23:05 GMT+0100 (Central European Standard Time)

//todo autocorrect days: 

console.log(new Date(2037, 10, 33, 15, 23, 5)); // gives automaticly Dec 03 !! 

//  Thu Dec 03 2037 15:23:05 GMT+0100 (Central European Standard Time)

//todo initial Time: 

console.log(new Date(0)); // initial time: Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time) 

//todo converting to milliseconds: 

console.log(new Date(3 * 24 * 60 * 60 * 1000)); //  three days after initial time: Sun Jan 04 1970 01:00:00 GMT+0100 (Central European Standard Time)

//todo timestemp: 

//  timestamp of the day number 3: 
// 3 * 24 * 60 * 60 * 1000 = 259200000

*/

//todo working with dates: 

/*

const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //  Thu Nov 19 2037 15:23:00 GMT+0100 (Central European Standard Time)

console.log(future.getFullYear());
// do not use getYear();

console.log(future.getMonth()); // (0-10)
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMonth());

//todo ISO String - international strandard 

console.log(future.toISOString()); // 2037-11-19T14:23:00.000Z

console.log(future.getTime()); // 2142253380000
console.log(new Date(2142253380000)); //  Thu Nov 19 2037 15:23:00 GMT+0100 (Central European Standard Time)

console.log(Date.now()); // 1613743588565 and this we can convert to full date

//todo set verions of this methods:

future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:00 GMT+0100 (Central European Standard Time)

// setMonth, setDate, setDays

*/ 

//t 174. Operations With Dates

/*

// moment.js - date liberery for JS 

const future = new Date(2037, 10, 19, 15, 23);
// console.log(Number(future)); // in ms: 2142253380000
// console.log(+future); // in ms: 2142253380000

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
  // Math.abs() - zamienia liczby ujemne na dodatnie, więc nie ma znaczenia, czy pierwsza data jest wcześniejsza 

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4)); // 10
const days2 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4, 10, 8));

console.log(days1); // 11 
console.log(days2); // 9.577777777777778

*/

//t 175 Internationalizing Dates Intl

// internalization API 

//t 176 Internationalizing Numbers Intl

// const number = 321565.12;

// const options = {
//  style: "currency",
//  unit: 'celsius',
//  currency: 'PLN'
// }

// console.log('US:', new Intl.NumberFormat('en-US', options).format(number));

// console.log('PL:', new Intl.NumberFormat('pl-PL', options).format(number));

// console.log('DE:', new Intl.NumberFormat('de-DE', options).format(number));

// console.log(navigator.language,
//   new Intl.NumberFormat(navigator.language).format(number));

//t 177 Timers: setTimeout and setInterval

/*

//todo setTimeout()

// setTimeout - runs just onece afret defined time 
// setIntervalTimer - keeps runing basically forever, until we stop it. 

const ingredients = ['olive', 'spinach']; 

const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, ...ingredients);

// () => console.log('Here is your pizza') -> this callback function is the first argument of the SetTimeout function, which will call after 3 seconds (3000 ms)

// passing arguments to the setTimeout function AFTER time delay

// ...ingredients - will takt the 'olive' and 'spinach' froma array and paste it coma separated 

console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)

//todo setInterval()

setInterval(function () {
  const now = new Date();
  let hours = `${now.getHours()}`.padStart(2, 0);
  let minutes = `${now.getMinutes()}`.padStart(2, 0);
  let seconds = `${now.getSeconds()}`.padStart(2, 0);
  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000)

*/



//t 178. Implementing a Countdown Timer
// /*



// */

// /*
// */