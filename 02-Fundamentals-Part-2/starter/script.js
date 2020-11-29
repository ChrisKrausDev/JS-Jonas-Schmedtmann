// function foodProcesor (apples, oranges) {
//     const juice = `Juice from ${apples} apples and ${oranges} oranges`
//     return juice
// }

// const appleJuice = foodProcesor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = foodProcesor(2, 4);
// console.log(appleOrangeJuice);

// FUNCTION DECLARATION - można ją wywołać przed zapisaniem tej funkcji (hoisting)
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }

// console.log(calcAge1(1988))

//     // FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1988);
// console.log(age2)

// Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1988);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1988, 'Krzysztof'));
// console.log(yearsUntilRetirement(2512, 'Bob'));

// FUNCTION CALLING OTHER FUNCTION

// function cutFruitPices(fruit) {
//     return fruit * 4;
// }

// function foodProcesor (apples, oranges) {
//     const applePieces = cutFruitPices(apples);
//     const orangePieces = cutFruitPices(oranges);

//     const juice = `Juice from ${applePieces} apples and ${orangePieces} oranges`
//     return juice
// }

// console.log(foodProcesor(2, 3));

//

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Chris'));
// console.log(yearsUntilRetirement(1950, 'Martin'));

//  ARRAYS

// const friend1 = 'Michael';
// const friend2 = 'Steave';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steave', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020)

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length) // ilość elementów w liście

// console.log(friends[friends.length - 1]);
// // [friends.length] = 3 - 1 daje 2 więc wyświetli ostatni element

// friends[2] = 'Jay';
// console.log(friends);
// // można częściowo zmienić zawartość tablicy, mimo zadeklarowania zmiennej const, gdyż jest to obiekt a nie typ prosty

// // friends = ['bob', 'marley'];
// // całkowita zmiana tablicy jest już niemożliwa: Uncaught TypeError: Assignment to constant variable.

// const firstName = 'Jonas'
// const jonas = [firstName, 'Kraus', 2037 - 1991, friends];

// // może zawierać różne typy danych

// console.log(jonas);
// console.log(jonas.length);

// arrays excercice
// ///////////////////////////////////////////////////

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// // es ist aber klar

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];

// console.log(ages);

// arrays methods
// ////////////////////////////////////////////////

// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// // dodatnie elementu do końca listy

// // const newLenght = friends.push('Jay');
// // console.log(newLenght);
// // można też w ten sposób

// console.log(friends);

// friends.unshift('John');
// // dodatnie elementu z przodu listy
// console.log(friends);

// friends.pop();
// // usunięcie ostatniego elementu
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven')); // 1
// console.log(friends.indexOf('Bob')); // -1

// friends.push(23);
// console.log(friends.includes('Steven')); // true
// console.log(friends.includes('Bob')); // false
// console.log(friends.includes(23));

// if (friends.includes('Peter')) {
//     console.log('You have a friend called Peter')
// }

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven')
// }

//////////////////////////////////////////////////////////
// OBJECTS

// const christopherArray = [
//     'Chris',
//     'Kraus',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const chris = {
//     firstName: 'Chris',
//     lastName: 'Kraus',
//     age: '32',
//     job: 'Electrician',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// key-value pairs

// const chris = {
//     firstName: 'Chris',
//     lastName: 'Kraus',
//     age: '32',
//     job: 'Electrician',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(chris);

// getting a property from an object:

// console.log(chris.lastName);
// console.log(chris['firstName']);

// const nameKey = 'Name';
// console.log(chris['first' + nameKey]);
// console.log(chris['last' + nameKey]);

// DOT VS BRACKET NOTATION

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// console.log(chris[interestedIn]);

// if(chris[interestedIn]) {
// console.log(chris[interestedIn])
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
// }

// USING DOT AND BRACKET NOTATION TO ADD AN OBJECT

// chris.location = 'Poland'
// chris['twitter'] = '@chriskraus'
// console.log(chris)

// Challenge
// "Chris has 3 friends, and his best friend is called Michael"

// console.log(`${chris.firstName} has ${chris.friends.length} friends, and his best friend is called ${chris.friends[0]}`)

// ////////////////////////////////////////////////////
//  OBJECTS

// const chris = {
//     firstName: 'Chris',
//     lastName: 'Kraus',
//     birthYear: 1991,
//     job: 'Electrician',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     calcAge: function(birthYear) {
//         return 2037 - birthYear
//     }
// };

// można zapisać to tak jak poniżej

// console.log(chris.calcAge(1991));
// console.log(chris['calcAge'](1991));
// console.log(chris.calcAge(chris.birthYear));

// lub zastosować keyword this:

// const chris = {
//     firstName: 'Chris',
//     lastName: 'Kraus',
//     birthYear: 1991,
//     job: 'Electrician',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     // calcAge: function() {
//     //     console.log(this)   //this odwołuje się do chris
//     //     return 2037 - this.birthYear
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear; // stwirzenie nowej   wartości w tablicy chris
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driving licence`
//     }
// };

// console.log(chris.calcAge());

// console.log(chris.age); //dziekię lini 284

// // Challenge
// // "Chris is a 46-year old teacher, and he has a driver's licence"

// const drivingLicence = chris.hasDriverLicense === true ? 'has a driving licence' : "has no driving licence";

// console.log(`${chris.firstName} is a ${chris.age}-years old ${chris.job}, and he ${drivingLicence}`)

// // powyżej moje rozwiązanie, w lini 288 rozwiązanie Jonasza
// console.log(chris.getSummary());

///////////////////////////////////////
// LOOPS!!!111one

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for(let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];

//   const types = [];

//   for (let i = 0; i < jonas.length; i++) {
//       console.log(jonas[i], typeof jonas[i])

//       // filling types array
//       // types[i] = typeof jonas[i];

//       types.push(typeof jonas[i]);
//       // za pomocą push ładujesz na koniec listy.

//   }

//   console.log(types);

//   const years = [1991, 2007, 1969, 2020];
//   const ages = [];

//   for (let i = 0; i < years.length; i++) {
//       ages.push(2037 - years[i]);
//   }

//   console.log(ages);

/////////////// break statement continue

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// console.log('==== ONLY STRINGS ====')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     // jeśli typ jest różny od string to przejdź dalej, nie wpisuj do nowej tabeli - chcemy wpisać tylko stringi!

//     console.log(jonas[i], typeof jonas[i])
// }

// console.log('==== BREAK WITH NUMBER ====')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     // jeśli typ jest różny od string to przejdź dalej, nie wpisuj do nowej tabeli - chcemy wpisać tylko stringi!

//     console.log(jonas[i], typeof jonas[i])
// }

// LOOPING FORWARD
////////////////////////////////////////////////////////

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
// ];

// for(let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++) {
//     console.log(`======== Starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// WHILE LOOP
/////////////////////////////////////////////////////////

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;

// while (rep <= 10) {
//     console.log(`WHILE LOOP: Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

var uniqueInOrder = function (iterable) {
  var list = iterable.split("");
  var list2 = [];
  for (i = 0; i < list.length; i++) {
    if (list[i] == !list[i - 1]) {
      list2.push(list[i]);
    }
  }
  return list;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
