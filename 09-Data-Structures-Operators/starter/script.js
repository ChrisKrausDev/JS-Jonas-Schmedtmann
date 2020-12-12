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
  }
}

  //fixme DESTRUCTURING OBJECTS
  // we using {} to do this
  // it's usefull when we dealing with third party data 

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
  // with no other values JS will take the default values from line 33! 
});
// calling this function and passing in an object of options, that's standart thing in JS 

const {restName, openingHours, categories} = restaurant;
// it will create 3 brend new values - order dosen't metter
console.log(restName, openingHours, categories);

const {
  restName: restaurantName, 
  openingHours: hours, 
  categories: tags} = restaurant;
  // we can add to the variables new names

console.log(restaurantName, hours, tags);

    // todo seting up default values:

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);
// when the starterMenu is not empty, like in our example, the empty value [] will be not assigned, but for menu - it is [] because there is no menu in restaurant

// it is usefull when we have no hard coded data 

    // todo mutating variables

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

// {a, b} = obj; // Unexpected token '=' to fix it:
({a, b} = obj);
console.log(a, b);
// that's how we can overwrite

    // todo nested objects

const {fri: 
  {open: o, close: c},
} = openingHours;
console.log(o, c);

  //fixme DESTRUCTURING ARRAYS

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



