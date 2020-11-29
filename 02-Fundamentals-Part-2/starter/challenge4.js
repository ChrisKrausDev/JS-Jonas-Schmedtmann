bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals =[];

let calcTips = 0;

const calcTip = function (bill) {
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);    
}

console.log(tips);
console.log(totals);


const calcAverage = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

