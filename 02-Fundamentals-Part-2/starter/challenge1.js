const calcAvarage = (fchell, schell, tchell) => Math.round(fchell + schell + tchell / 3);

const avgDolphins = calcAvarage(44,23,71);
console.log(avgDolphins);

const avgKoalas = calcAvarage(65,154,49);
console.log(avgKoalas);

const checkWinner = function (firstTeam, secondTeam) {
    if (firstTeam > 2 * secondTeam) {
        console.log(`Dolphins win (${firstTeam} - ${secondTeam})`);
    } else if (secondTeam > 2 * firstTeam) {
        console.log(`Koalas win (${secondTeam} - ${firstTeam})`);
    } else {
        console.log(`There is no winer`);
    }
}

console.log(checkWinner(avgDolphins, avgKoalas))