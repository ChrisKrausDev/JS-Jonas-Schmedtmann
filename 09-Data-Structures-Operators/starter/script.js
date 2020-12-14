'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // open 24 hours
    close: 24,
  },
};

// destructuring is an ESX feature and it's unpacking values
// from an array or an object into separate variables.

// so destructuring is basicly breaking a complex data structure down into a smaller data structure like a variable.

const restaurant = {
  restName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,


  // new syntax with ES6 by defining methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  }
}

  //fixme 103 DESTRUCTURING OBJECTS
  // we using {} to do this
  // it's usefull when we dealing with third party data 

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
//   // with no other values JS will take the default values from line 33! 
// });
// // calling this function and passing in an object of options, that's standart thing in JS 

// const {restName, openingHours, categories} = restaurant;
// // it will create 3 brend new values - order dosen't metter
// console.log(restName, openingHours, categories);

// const {
//   restName: restaurantName, 
//   openingHours: hours, 
//   categories: tags} = restaurant;
//   // we can add to the variables new names

// console.log(restaurantName, hours, tags);

    // todo seting up default values:

// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);
// // when the starterMenu is not empty, like in our example, the empty value [] will be not assigned, but for menu - it is [] because there is no menu in restaurant

// // it is usefull when we have no hard coded data 

//     // todo mutating variables

// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// // {a, b} = obj; // Unexpected token '=' to fix it:
// ({a, b} = obj);
// console.log(a, b);
// // that's how we can overwrite

//     // todo nested objects

// console.log('-------------NESTED OBJECTS-------------');
// const {fri: 
//   {open: o, close: c},
// } = restaurant.openingHours;
// console.log(o, c);

  //fixme 104 DESTRUCTURING ARRAYS

//     const arr = [2, 3, 4];
//     // to destructurize this array:

//     const a = arr[0];
//     const b = arr[1];
//     const c = arr[2];

//     // but there is a better way

//     const [x, y, z] = arr; // instruction for JS - do destructuring. 
//     console.log(x, y, z);

//     // Original arr is not affect
//     console.log(arr);

// // const [first, second] = restaurant.categories;
// // console.log(first, second); // Italian Pizzeria

//     // if we want first and third element:

// // const [first, , second] = restaurant.categories;
// // console.log(first, second); // Italian Vegetarian

//     // if we want reverse order (Italian vegetarian to Vegetarian Italian) :


// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//     // or: 

// [main, secondary] = [secondary, main];
// console.log('easier:', main, secondary);

//     // Recive 2 return values froma a function with destructuring

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//     // todo what happend when we have a nested array? Nested destructuring

// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);

//     // when we need a single value from the nested array, we neet to do destructurin in destructuring ;)

//     const [i, ,[, k]] = nested;
//     console.log(i, k);

//     // todo default values, when we don't know the length of an array

// const [p = 1, q = 1, r = 1] = [8, 9];
// // if = [8, 9] => q = also 1
// console.log(p, q, r);

    //fixme 105 the spread operator (...)

// the spread operator takes all the elements from the array and it also doesn't create new variables. As a consequence, we can only use it places where we would otherwise write values separated by commas. It works on all so-called iterables (arrays, strings, maps, sets. NOT OBJECTS)

// const str = 'chris';
// //unpacking string
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// // but its only working while creating new array or by passing arguments into a function
// // console.log(`${...str} Kraus`); // Unexpected token '...'

// const arr = [7, 8, 9];

// // how to create new arr based on the old arr but with some new elements on the beginnig?

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // since ES6 we can use spread operator (...) it take all values from arr and write it to the newArr

// const newArr = [1, 2, ...arr];
// // const newArr = [1, 2, arr]; // => [1, 2, Array(3)]
// console.log('spread operator', newArr)

// // whenever we need the elements of an array individually then we can use spread operator (to write elements from a function or when we need to pass multiple elements into a function like we did here):
// console.log(...newArr);

// // ===

// // creating a new array based on the restaurant.mainMenu
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//todo two important cases of uses spread operator:

    // creating shallow copies of array

// const mainManuCopy = [...restaurant.mainMenu];

//     // marging two arrays together

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1'), prompt('Let\'s make pasta! Ingredient 1'), prompt('Let\'s make pasta! Ingredient 1')];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// with ES6 spread operator: 

// restaurant.orderPasta(...ingredients);

//todo since 2018 ES6 spread operator works also with objects!

// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.restName);

//fixme 106 rest pattern and parameters

// rest pattern looks exactly like the spread operator (...), but it does the oposit of the spread operator.

// spred operator is to unpack an array while rest is to pack elements into an array

      // 1 DESTRUCTURING

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // REST, because on LEFT side of =
// console.log('-----------REST pattern-----------');
// const [a, b, ...others] = ['in',2,3,4,5];
// console.log(a, b, others);

// // the REST pattern collects the elements that are unused in the destructuring assignment like below: 

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu];

// console.log(pizza, risotto, otherFood);

// // with an objects

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);
//   // ...weekdays collects the rest of the properties into its own new object

//       // 2 FUNCTIONS

// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// }
// // rest arguments
// add(2, 3); 
// add(5, 3, 7, 2);
// add(2, 3, 4, 5, 6, 7, 8);

// // in this example the rest syntax is taking multiple numbers or multiple values and then packs them all into one array. So its doing the oposite of the spread operator.

// // WITH THE SPREAD OPERATOR WE EXPAND, WITH THE REST SYNTAX WE COMPRESS

// const x = [23, 5, 7];
// add(...x); // it's this same as add(x[0], x[1], x[2]);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// once again, the rest parameters serves to collect all of the remaining basically unused parameters that ware not used in mainIngridient from line 41

          //todo summary

        // the spread and rest syntax both look exactly the same but they work in opposite ways depending on where they are used. 

        // the spread operator is used where we would otherwise write values, separated by a comma

        // the rest operator is used where we would otherwise write variable names separated by commas

        // the rest pattern can be used where we would write variable names, separated by commas and not values separated by commas

    //fixme 107 short circuting 

// // logical operator can use ANY data type, return ANY data type, and they do something called short-circuting
// console.log('----------OR-----------');

// console.log(3 || 'chris');
// //short circuting means - if the first value is true, then it returns this value. Do not even look at the second value

// console.log("" || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); 

// // better: 

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// // its 10 when numGuests is not defined at 305 line

// console.log('---------AND-----------');
// // && short circuit when the first value is falsy, do not take a look at the second value 

// // if every values are true it will show the last one 

// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log(4 && 'hello' && 23 && null && 'jonas');

// // practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mashrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mashrooms', 'spinach')
// // if restaurant.orderPizza is true JS will call the function orderPizza

    //fixme 108 the nullish coalescing operator es2020

// restaurant.numGuests = 0; 
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// // it will show 0! its wrong! 

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// // it will show 0 when numGuests is defined as 0 at 336 line. 

// // Nullish values: null and undefined (not 0 or '');
// // only when the first value will be null or undefined THEN it will show 10

//fixme coding challenge!!! 

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const {odds:
//   {team1: team1, x: draw, team2: team2},
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function(n, ...player) {
//   for (let i = 0; i < n; i++) {
//     console.log(`${player} - with 1 goal`); 
//   } 
// };

// console.log(printGoals(2, 'Davis', 'Muller', 'Lewandowski', 'Kimich'));

// console.log(team1 > team2 ?? team1 < team2);

//todo with jonas

// console.log(`===========
// coding challenge
// with jonas
// ============`);

// // 1) destructuring the game.players arrey:

// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2) destructuring based on players1 array

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3) allPlayers with spread operator

// const allPlayers = [...players1, ...players2]
// // put in the allPlayers array all players from players1 and all from players2
// console.log(allPlayers);

// // 4)

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // unpacking players1 array into a new players1Final array

// // 5)

// const {odds: {
//   team1, x: draw, team2
// }} = game;
// // so we take 'game' and from there we take 'odds' property
// console.log(team1, draw, team2);

// // 6 by using rest parameter we are goint to agregate all incoming arguments into one array

// const printGoals = function(...players) {
//   console.log(`${players.length} gols were scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
// printGoals('Davies', 'Muller');

// printGoals(game.scored); // if we do so, it will put as an argument ONE array with ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'] so that's why output = 1

// // we need to put this arguments (players) one by one so:

// printGoals(...game.scored);

// // 7 

// team1 < team2 && console.log('Team 1 is more likely to win');

// when the first argument is TRUE it will evaluate the last one!!!! only with &&

    //fixme 110. looping arrays: the for-of loop

console.log(`========== for-of loop ===========`);
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// to print all elements: each element logged one by one - the item variable is a current element in each iteration 


// if u need index of the element u can do so: 
console.log(`--- menu.entries for-of loop`);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// now each element is an array with the index and the array element itself
console.log(`--- menu.entries`);
console.log(menu.entries()); // it shows only array iterator {}, if u want to look inside u need to expand it using spread operator:

// console.log(...menu.entries());

// and then creating a new array based on menu.entries:
console.log(`---[...menu.entries()]`);
console.log([...menu.entries()]);

console.log(` `);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// with destructuring works this same like the for loop in 492, but it's easier to do

    //fixme 111. Enhanced object literals
// console.log(`----------------- enhanced object literals ------------------`);

// object literal syntax is const restaurant = {
  // end everything what is inside
// }

// ES6 introduced three ways, which makes it easier to write object literals like this

// first of all lets say that we have an object that is outside of this object (separate variable):

// const openingHours ={
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // open 24 hours
//     close: 24,
//   },
// };

// and then you can simply write only theopeningHours to the object literals of the restaurant. It will be shown as it will be inside.

//  1) easier way to define object lierals like below
//  2) easier way to define methods in object literals
//  3) computing names like in line 5!

        // const openingHours = {
        //   [weekdays[3]]: {
        //     open: 12,
        //     close: 22,
        //   },
        //   [weekdays[4]]: {
        //     open: 11,
        //     close: 23,
        //   },
        //   //todo [`day-${2 + 4}`]: {
        //     open: 0, // open 24 hours
        //     close: 24,
        //   },
        // };

    //fixme 112 optional chaining (.?)

// console.log(`-------------- optional chaining --------------`);

// optional chaining - newer feature of objects and arrays

// console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); // undefined.open = ERROR

//to avoid this error we have to check if openingHours.mon actually exists:

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // doesn't exist

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); // exist - logged

// // it's fine, but it's unreadeble, bit messy, and works only for one object. For more objects:

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// alter... katastrophe but here it comes...............

//todo es2020 OPTIONAL CHAINING

// console.log(restaurant.openingHours.mon?.open);
// // only if the object before ? exist, the this open property will be read from there. If not, then immediately undefined will be returned.

// // and... a property exist if it's not null and not undefined. If it's 0 or ' ' its still exists.

// // we can have multiple optional chaining

// console.log(restaurant.openingHours?.mon?.open);
// // it openingHours dosen't exist the mon will not be even read. JS will logged undefined

// // example

// const days = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   //it shows undefined when the opening hours are not defined, if we don't want that we can siply use || 'closed', but in case of saturday, where opening is at 0 it show also 'closed' because 0 is 'falsy'

//   // so in this situation we can use nullish coalescing operator ?? - now working fine!
//   console.log(`On ${day}, we open at ${open}`);
// }

//todo optional chaining for calling methods 

// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// // we can check or order() exist 

// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// if the method doesn't exist JS will set it as undefined and thanks nullish coalescing operator it will go to the second operant and logged: 'method does not exist'

//todo optional chaining for arrays

// const users = [
//   {name: 'jonas', email: 'hello@jonas.io'
// }];

// // to get the name of the first element of this array:

// console.log(users[0]?.name ?? 'user array is empty');
// // only when the user[0] exist (optional chaining) we cant take it's .name otherweise (??) logged 'user array is empty' 

// // without new features - more work, complicity etc:

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// fixme looping objects: object keys. values and entries

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
//   // logged 'thr fri sat' which is a keys of this object
// }

//todo Property NAMES

const properties = Object.keys(openingHours);
console.log(properties);
// properties it's an array with 3 objects

// we can use it (Object.keys()) to compute how many properties are in the object:

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//todo Property VALUES

console.log(`------------ property values ----------------`);
const values = Object.values(openingHours);
console.log(values);


//todo entire object

// now to really simulate to loop over the entire object we actually need the entries (name plus the values together)

const entries = Object.entries(openingHours);
console.log(entries);

// simply speaking - it's transform the object into an array, so we can loop into this object:

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);

  // [key, {open, close}] it's nesseseiry because this value is also an object - thanks this destructuring we can then use open and close in our string output 

  // [key, value] - with simple object that's enough
}

// On thr we open at 12 and close at 22
// On fri we open at 11 and close at 23
// On sat we open at 0 and close at 24


//fixme 114 coding challenge #2 

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. loop over the game.scored array and print each player name to the console, along with the goal number (example: 'goal 1: Lewandowski')

for (const item of game.scored.entries()) {
  console.log(`Goal ${item[0] + 1} - ${item[1]}`);
};

// 2. use a loop to calculate the averange odd and log it to the console 
