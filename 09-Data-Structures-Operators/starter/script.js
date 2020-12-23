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


  //todo entires object

console.log(`------------ entries values ----------------`);

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
//todo 1
// 1. loop over the game.scored array and print each player name to the console, along with the goal number (example: 'goal 1: Lewandowski')


// for (const item of game.scored.entries()) {
//   // in the array we are using entries() method! 
//   console.log(`Goal ${item[0] + 1} - ${item[1]}`);
// };

// for (const [i, player] of game.scored.entries())
//   // destructuring the game.scored array ['i' - index of the player, 'player' - es ist klar]
//   console.log(`Goal ${i + 1}: ${player}`);

//todo 2
// 2. use a loop to calculate the averange odd and log it to the console 

// console.log(Object.values(game.odds));
// // loggs an array with values from game.odds [1.33, 3.25, 6.5]

// let averange = 0;
// for (const odd of Object.values(game.odds))
//   averange += odd;
//   // loops over the game.odds values array and added it to the averange in each iteration

// averange /= Object.values(game.odds).length;
// // deviding the avg var by a length of the
// console.log(averange);

//todo3
// 3 Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
    // Odd of victory Bayern Munich: 1.33
    // Odd of draw: 3.25
    // Odd of victory Borrussia Dortmung: 6.5
// Get the team names directly from the game object, don't hardoce the (except for 'draw'). HINT: Note how the odds and the game objects have the same property names!

// for (const [team, odd] of Object.entries(game.odds)) {
//   // we need to loop through an object, so we can use Object.entries(game.odds) method, where we put in the method an object that we are interested in. We will get an array of arrays which in each position will have both - the team and the odd, so we give the variables names: [team, odd]

//   const teamStr = team === 'x' ? `draw` : `victory ${game[team]}`; 
//   // it's itearate through Object.entries(game.odds), when it find x under the 'team' will logged draw, else victory and the team name!

//   // game[team] will print once team1 and once time2 becoause so it is named in odds! Will then take that string and put it to `victory ${game[team]` [team] = game.team1 so it is Bayern Munich 

//   console.log(`Odd of ${teamStr} ${odd}`);
// }

//fixme 115 SETS

// In JS were always only two built-in data structures - objects and arrays. But in ES6 two more were introduced.

// sets and maps

// they are exist in many other programming languages, and now also in JS 

//todo SET IS JUST A COLECTION OF UNIQUE VALUES
// Differences from an arrays
// 1) set can never have any duplicates
// 2) an order of elements in the set is irrelevant

// console.log('------------------- SETS --------------------');

// const orderSet = new Set([
//   'Pasta',
//   'Pizza', 
//   'Pizza', 
//   'Risotto', 
//   'Pasta',
// ]);

// console.log(orderSet); // {"Pasta", "Pizza", "Risotto"}
// // returns an array without duplicates

// // sets are iterables, strings also:
// console.log(new Set('Chris')); // {"C", "h", "r", "i", "s"}

    //todo how to work with sets

// console.log(orderSet.size); // 3 
// // not length like in arrays 

// console.log(orderSet.has('Pizza')); // true
// console.log(orderSet.has('Bread')); // false
// // like includes() in arrays

// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread'); 
// console.log(orderSet); // {"Pasta", "Pizza", "Risotto", "Garlic Bread"}
// // with add we can add some elements into a set

// orderSet.delete('Risotto');
// console.log(orderSet); // {"Pasta", "Pizza", "Garlic Bread"}

// orderSet.clear(); // {}

    //todo retriving elements from set

// there is no need to take values out of set, because values are unique and the order of values does not matter. To store and retrive data use arrays

// for (const order of orderSet) console.log(order);
// if sets are iterable we can do a for loop with them

    //todo the big use case for them
// is to delete duplicates from an array

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

// // and when we need to have an array with unique positions:

// const staffUnique = new Set(staff);
// console.log(staffUnique); // {"waiter", "chef", "manager"}
// // we got a set with unique positions, but we want to make an array from it:

// const staffUnique2 = [...new Set(staff)];
// // we can create an array around the new set using [] and the spread operator will take all element from a set and put it to the new array - because set are iterable

// // spread operator take all the elements out of the iterable, and write them in 'staff' like comma separated.
// console.log(staffUnique2); // ["waiter", "chef", "manager"]

// console.log(
//   new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// );
// // 3

// // if we only want to know the number of unique elements, we do not need to create a new array, use only .size method.

// console.log(new Set('krzysztofkraus').size); // 10
// // counting how many letter is in a string

//fixme 116 maps fundamentals

// map is a data structure that we can use to map values to keys, just like an object, data is sotred in key value pairs in maps.

// the difference between maps and object it that in maps, the keys can have ANY type. In objects, the keys are basically always strings, but in maps, we can have any type of key. It can be object, erase or other maps

// console.log('----------------- maps maps maps maps--------------');

  //todo creating a map .set()

// const rest = new Map();
// // best practice is create empty map and the fill it:

// rest.set('name', 'Classico Italiano');
// console.log(rest);
// the first ('name') is the key name, and the value is a name of the restaurant

// set() method allow us to add elements to the data structure

// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// when the restaurant has two location... the key can be any type of data so here we have a number 

// btw the set method return new set:
// {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}

// the fact that the .set() method returns new set allows us to chain the set method like this:

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(')

  //todo reading data from a map .get()

// console.log(rest.get('name')); // Classico Italiano
// console.log(rest.get(true)); // We are open :D
// console.log(rest.get(1)); // Firenze, Italy

// const time = 8; 
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); 
// checking whether the restaurant is open or close

// it's ok but it's not readable

  //todo other methods!

// console.log(Array.from(rest)); // creating array from set (and other array like object or iterable objects like Map, Set, etc.)

// console.log(rest.has('categories')); // true
// // whether it has 'categories'

// rest.delete(2);
// console.log(rest);

// console.log(rest.size); // number of elements in map

// console.log(rest.clear());

  //todo using arrays or object as map keys

// console.log('==========using arrays or object as map keys');
// rest.set([1,2], 'test')
// console.log(rest);

// 0: {"name" => "Classico Italiano"}
// 1: {1 => "Firenze, Italy"}
// 2: {"categories" => Array(4)}
// 3: {"open" => 11}
// 4: {"close" => 23}
// 5: {true => "We are open :D"}
// 6: {false => "We are closed :("}
// 7: {Array(2) => "test"}
//   key: (2) [1, 2]
//   value: "test"

// how to get data based on this array?

// console.log(rest.get([1,2])); // undefined!! because the array from 919 line and the 935 code line are not the same object in the heap.

// // in order to make it work we need to do this: 

// const arr = [1, 2]; 
// rest.set(arr, 'test');
// console.log(rest.get(arr)); // now this two array refers to the same place in memory

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

//fixme 117 iteration
// better way to put more values to the map
// an array of arrays

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'js'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// it's similar to this:

// console.log(Object.entries(openingHours));

// 0: (2) ["thr", {…}]
// 1: (2) ["fri", {…}]
// 2: (2) ["sat", {…}]

// it is also an array of arrays, where the first el is the key, and the second is a value 

//todo and what this means, there is an easy way to convert from objects to maps

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// converting objects to maps

//todo iteration

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
//   // we want to log only values where 'key' is a number
// }
// we will loop over 'question' - each item of the 'question' will contain both the key and the value, and hewe we can now directly restructure that into two separate variables 

// only difference when we loop over objects is that we need Object.entries() method, only because objects are not iterable (but we converting an object to iterable using Object.entries())

//todo quiz game

// const answer = Number(prompt('Your answer'));
// const output = answer === 3 ? question.get(true) : question.get(false);
// console.log(output);
// console.log(answer);

// // jonas 

// console.log(question.get(question.get('correct') === answer));
// // question.get('correct') === answer - it will return true sooooo
// // it's similar to console.log(question.get(true));

//todo convert map to array:

// sometimes we need to convert a map back to array  we can do this by simply building new array and then unpacking it with the spread operator

// console.log([...question]); // it's this same: console.log([...question.entries()]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// // it will return MapIterator, but we can do also likt below:

// console.log([...question.keys()]); // print out simple array with keys
// console.log([...question.values()]); // print out simple array with values



//fixme 118 Summary: Which Data Structure to Use?


/* //todo sorce of data

  1) from the program itself: data written directly in source code (e.g status messages)

  2) From the UI: Data input from the user or data written in DOM (e.g tasks in todo app)

  3) MOST COMMON IN MODERN JS APLICATIONS: From external sources: Data fetched for example from web API (e.g. recipe objects) They come usualy with special data format called JSON

  WHERE DO WE STORE COLLECTION OF DATA?

  For that we use DATA STRUCTURE:

    Simple List => Arrays or Sets
    Key/Value Pairs => Objects or Maps

*/

// fixme 119: Coding Challenge #3 

// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow card'],
//   [69, 'Red Card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'GOAL'],
//   [80, 'GOAL'],
//   [92, 'Yellow card']
// ])

// //TODO 1 Create an array 'events' of the different game events that happend (no duplicates)

//   // console.log([...gameEvents.values()]);

//   const events = Array.from(new Set([...gameEvents.values()]));
//   console.log(events);

//   // JONAS:

//   const events2 = [...new Set(gameEvents.values())];
//   console.log(events2);

// //TODO 2 after the game was finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

//   gameEvents.delete(64);
//   console.log(gameEvents);  

// //TODO 3 Print the following string to console: "An event happend, on avarage, every 9 single minutes" (keep in mind that the game has 90 minutes)

//   console.log(`An event happend, on avarage, every ${Array.from([...gameEvents]).length} single minutes`);

//   // JONAS:

//   const gameTime = [...gameEvents.keys()].pop();
//   console.log(gameTime);

//   console.log(`An event happend, on avarage, every ${gameTime / gameEvents.size} single minutes`);

// //TODO 4 Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: 

//   // [FIRST HALF] 17: GOAL
  
// for (const [key, value] of gameEvents) {
//   key <= 45 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);
// };

// // JONAS DRY!!!

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half}] ${min}: ${event}`);
// }

//fixme 120 - working with strings part1 
// console.log('-------------- working with strings --------------------');

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737' [0]);

// console.log(airline.length);
// console.log('B737'.length);

// strings methods

//todo indexOf()

// console.log(airline.indexOf('r')); // it give us the first occurance
// console.log(airline.lastIndexOf('r')); // last occurance 
// console.log(airline.indexOf('portugal')); // -1 because it can't finde it 

//todo slice()
// with the index we can extranct part of a string using the slice method and a slice method needs indexes as arguments, so therefore sometimes it can be very useful to first figure out the index of part of a string

// console.log(airline.slice(4)); // Air Portugal

//first parameter is the position where slice() starts! so that's why it give Air portugal (and it's call substring - just the part of the original string) and it dosen't change the original string (strings are primitives). If we need to use changed string or substring we need to store it in new variable.

// console.log(airline.slice(4, 7)); // Air
// // starting and ending parameter
// // length of this substring is alweys 7 - 4 = 3 (second - first = length)

// console.log(airline.slice(0, airline.indexOf(' '))); // TAP

// console.log(airline.slice(airline.lastIndexOf(' ') +1)); //  Portugal

// console.log(airline.slice(-2)); // starts extracting from the end

// console.log(airline.slice(1, -1)); // AP Air Portuga
// // starts at 1 omiting first letter at index 0, and with second parameter = -1 it will cutout the last letter

// const checkMiddleSeat = function(seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat :|');
//   else console.log(('You got lucky :D'));
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

//todo understanding why this actually works:

// strings are primitives - why do they have methods? Methods normally are only for objects like arreys. JS is really smart... so how this works:

// Whenever we call a method on a string Js will automatically behind the scenes convert that string primitive to a string object with the same content and THEN it's on that object where the methods are called.

// This process is called BOXING because it take our string and puts it into a box which is the object. It looks like this below:

// console.log(new String('jonas'));
// console.log(typeof new String('jonas')); // object! 

// // When the operation is done the object is converted back to a regular string primitive.

// // In fact all string methods return primitives

// console.log(typeof new String('jonas').slice(1)); //  string

//fixme 121 Working with Strings Part 2 

//changing the case of a string

// console.log(airline.toLowerCase()); // tap air portugal
// console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
// console.log('jonas'.toUpperCase()); // JONAS

// // fix capitalization in name

// const passenger = 'jOnAS'; // it have to be fixed
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = 
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// it's make all letters in lowerCase at first and then make only first letter upperCase and add rest letters without the first one (slice(1))

// Comparing emails

// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// // checking or this two emails are the same 

// const lowerEmail = loginEmail.toLowerCase();

// // const trimmedEmail = lowerEmail.trim(); // deleting white spaces
// // console.log(trimmedEmail);

// // OR 

// // const normalizedEmail = loginEmail.toLowerCase().trim();

// // console.log(normalizedEmail); 

// const comparingEmails = function (email1) {
//   const normalizedEmail1 = email1.toLowerCase().trim();
//   console.log(email === normalizedEmail1);
// }


// comparingEmails('  Hello@Jonas.Io \n');

//todo replacing a part of strings

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.')
// // first arg it this one which we want to replace 
// // and then we can replace , with the . 

// console.log(priceUS);

// const announcement = 'All passengers come to bording door 23. Bording door 23!'
// console.log(announcement.replace('door', 'gate')); // All passengers come to bording gate 23. Bording door 23! - it's changed only a first occurance soooo: 

// console.log(announcement.replaceAll('door', 'gate')); // All passengers come to bording gate 23. Bording gate 23

// // regular expression regex

// console.log(announcement.replace(/door/g, 'gate')); // All passengers come to bording gate 23. Bording gate 23!

//todo booleans! include(), startWith(), endWith()

// const plane1 = 'A320neo';
// console.log(plane1.includes('A320')); // true
// console.log(plane1.includes('Boeing')); // false
// console.log(plane1.startsWith('Air')); // false
// console.log(plane1.startsWith('A3')); // true

// if (plane1.startsWith('A320') && plane1.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// };

// TODO PRACTICE EXERCISE

// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// }

// checkBaggage('I have a laptop, some Food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//fixme 122 Working with Strings Part 3 

//todo split() 

// console.log(('a+very+nice+string').split('+')); // it will split this string by a + => ["a", "very", "nice", "string"]

// console.log("Jonas Schmedtmann".split(' ')); // ["Jonas", "Schmedtmann"]

// // destructuring an array: 

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

//todo join() - opposite 

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName); // from this three elements array creaiting one string: Mr. Jonas SCHMEDTMANN. As a separation (' '), we can use anything.

// const capitalizeName = function(name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     // take the first name and then replace first letter n[0] with the first letter converted to uppercase n[0].toUpperCase();
//   }
//   console.log(namesUpper);
// }

// capitalizeName('jessica ann smith davis'); // ["Jessica", "Ann", "Smith", "Davis"]
// capitalizeName('jonas schmedtmann') // ["Jonas", "Schmedtmann"]

//todo padding a string
// padding a string it mean to add a number of characters to the string until the string has a certain desired length 

// const message = 'go to gate 23!';
// console.log(message.padStart(25, '+')); // +++++++++++go to gate 23! => add '+' to the begining of the string so thath the strings length is 25! 

// console.log('Jonas'.padStart(25, '+')); // ++++++++++++++++++++Jonas to gate 23!

// console.log(message.padStart(25, '+').padEnd(30, '+')); // +++++++++++go to gate 23!+++++

// const maskCreditCard = function(number) {
//   const str = number + '' // when one operand of the plus sign is a string it will convert all the operands to a string! We do not need to do => String(number)
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*')
// }

// // const number2 = 2;
// // console.log(typeof String(number2));

// console.log(maskCreditCard(2039429348093284092));
// console.log(maskCreditCard('2309430950934532333'));

//todo repeat

// const message2 = 'Bad wather... all departues delayed';

// // how to log it multiple times?

// console.log(message2.repeat(5));

// const planeInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'>=>-'.repeat(n)}`);
// }

// planeInLine(5);
// planeInLine(2);
// planeInLine(12);

//fixme 123 coding challenge #4
console.log('-------=============== coding challenge =========================-------');

//todo write a program that recives a list of variable names written in undescore_case and convert them to camelCase 

//test data:

/*

underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'*'.repeat(i + 1)}`);
  }
});

/*

1354 - takes value from textarea

1355 - rozdziela na pojedyńcze stringi po odczytaniu \n nowej linii i ładuje to do rows array: 

["underscore_case", " first_name", "Some_Variable", "  calculate_AGE", "delayed_departure"]

1358 - pętla for...of 

 const [first, second] = row.toLowerCase().trim().split('_');

 bierze każdy z elementów tablicy rows np "underscore_case" - rozdziela go na dwa wyrazy za pomocą metody .split('_'), pierwszy wyraz ładuje do zmiennej first, kolejny do second [destrukturyzacja]

1360 

  const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
  )}`;

formatuje output w odpowiedni sposób (dwa wyrazy bez spacji), dodatkowo zmieniając pierwszą literę drugiego wyrazu z małem na dużą co daje pożądany zapis

//todo dodatkowo ikonki *

 for (const [i, row] of rows.entries()) -

    można użyć metody .entries() w for...of loop by móc skorzystać z indeksu iteratora i.

console.log(`${output.padEnd(20)}${'*'.repeat(i + 1)}`);

padEnd example

underscoreCase      *
firstName           **
someVariable        ***
calculateAge        ****
delayedDeparture    *****

*/