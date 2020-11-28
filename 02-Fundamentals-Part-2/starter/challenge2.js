let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 2;
const sum = bill + tip;
console.log(`Rechnung plus tip: ${sum}`);


// jeśli rachunek jest w prezdziale od 50 do 300 to napiwek = 15% jeśli nie to 20%

const calcTip = function (bill) {
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 2;
    return tip
}

console.log(calcTip(44));

const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 2;

console.log(calcTip2(245));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips)
