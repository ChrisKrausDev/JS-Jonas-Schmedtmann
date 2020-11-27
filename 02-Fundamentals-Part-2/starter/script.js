
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