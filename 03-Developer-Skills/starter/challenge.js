'use strict'

// 1 
// To do is an program that take a numbers from the array, that represents temp and print out forecasted maximum temps.

// for each temp it should print out one sentence like this: "... >temp< in 1 days " and after the last sentence it should print out "..."

// 

const temps = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4]

const printForecast = function(temp) {
    let text = "";
    for (let i = 0; i < temp.length; i++) {
        text += (`... ${temp[i]}C in ${i + 1} days `);
    }
    return text + "...";
}

console.log(printForecast(temps));
console.log(printForecast(temps2));

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

`${data[0]}`