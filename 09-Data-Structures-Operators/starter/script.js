'use strict';

// destructuring is an ESX feature and it's unpacking values
// from an array or an object into separate variables.

// so destructuring is basicly breaking a complex data structure down into a smaller data structure like a variable.

const restaurant = {
  restName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
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

console.log('-------------NESTED OBJECTS-------------');
const {fri: 
  {open: o, close: c},
} = restaurant.openingHours;
console.log(o, c);

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
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
console.log('-----------REST pattern-----------');
const [a, b, ...others] = ['in',2,3,4,5];
console.log(a, b, others);

// the REST pattern collects the elements that are unused in the destructuring assignment like below: 

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu];

console.log(pizza, risotto, otherFood);

// with an objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);
  // ...weekdays collects the rest of the properties into its own new object

      // 2 FUNCTIONS

const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}
// rest arguments
add(2, 3); 
add(5, 3, 7, 2);
add(2, 3, 4, 5, 6, 7, 8);

// in this example the rest syntax is taking multiple numbers or multiple values and then packs them all into one array. So its doing the oposite of the spread operator.

// WITH THE SPREAD OPERATOR WE EXPAND, WITH THE REST SYNTAX WE COMPRESS

const x = [23, 5, 7];
add(...x); // it's this same as add(x[0], x[1], x[2]);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

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

console.log(`===========
coding challenge
with jonas
============`);

// 1) destructuring the game.players arrey:

const [players1, players2] = game.players;
console.log(players1, players2);

// 2) destructuring based on players1 array

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3) allPlayers with spread operator

const allPlayers = [...players1, ...players2]
// put in the allPlayers array all players from players1 and all from players2
console.log(allPlayers);

// 4)

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// unpacking players1 array into a new players1Final array

// 5)

const {odds: {
  team1, x: draw, team2
}} = game;
// so we take 'game' and from there we take 'odds' property
console.log(team1, draw, team2);

// 6 by using rest parameter we are goint to agregate all incoming arguments into one array

const printGoals = function(...players) {
  console.log(`${players.length} gols were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
printGoals('Davies', 'Muller');

printGoals(game.scored); // if we do so, it will put as an argument ONE array with ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'] so that's why output = 1

// we need to put this arguments (players) one by one so:

printGoals(...game.scored);

// 7 

team1 < team2 && console.log('Team 1 is more likely to win');

// when the first argument is TRUE it will evaluate the last one!!!! only with &&