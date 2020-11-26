const MarkWeight = 78;
const JohnWeight = 92;
const MarkHight = 1.69;
const JohnHight =1.95;

// const MarkWeight = 95;
// const JohnWeight = 85;
// const MarkHight = 1.88;
// const JohnHight =1.76;

const MarkBMI = MarkWeight / MarkHight * MarkHight;
const JohnBMI = JohnWeight / JohnHight * JohnHight;


const MarkHigherBMI = MarkBMI > JohnBMI;
console.log(MarkHigherBMI)

if(MarkHigherBMI == true) {
    console.log(`Mark's BMI is higher than John's!`)
} else {
    console.log(`John's BMI is heigher than Mark's!`)
}

// ------------------------------------------------
console.log(`
Task 2

`)

const hasDriverLicence = true;
const hasGoodVision = true;
const isTired = true
const shouldDrive = hasDriverLicence && hasGoodVision && !isTired

if (shouldDrive) {
    console.log(`Sarah can drive`)
} else {
    console.log(`Someone else should drive...`)
}

// ------------------------------------------------
console.log(`
Task 3

`)

const firstCompDolphins = 102;
const secondCompDolphins = 108;
const thirdCompDolphins = 89;
const firstCompKoalas = 101;
const secondCompKoalas = 91;
const thirdCompKoalas = 110;

const dolphinsScore = 96 + 108 + 89;
const koalasScore = 88 + 91 + 110;

if ( (firstCompDolphins >= 100 && firstCompKoalas > 100 && firstCompDolphins >= firstCompKoalas) ) {
    console.log(`First comp - dolphins wins!`)
} else if ( (firstCompDolphins >= 100 && firstCompKoalas >= 100 && firstCompDolphins < firstCompKoalas) ) {
    console.log(`First comp - koalas wins!`)
} else if (firstCompDolphins && firstCompKoalas >= 100 && firstCompDolphins === firstCompKoalas) {
    console.log(`First competition! It's a draw!`)
} else {
    console.log(`Nobody has 100 pkt`)
}

if ( secondCompDolphins > secondCompKoalas ) {
    console.log(`Second comp - dolphins wins!`)
} else if (secondCompDolphins === secondCompKoalas) {
    console.log(`It's a draw!`)
} else {
    console.log(`Second comp - koalas wins!`)
}

if ( thirdCompDolphins > thirdCompKoalas ) {
    console.log(`Third comp - dolphins wins!`)
} else if (thirdCompDolphins === thirdCompKoalas) {
    console.log(`It's a draw!`)
} else {
    console.log(`Third comp - koalas wins!`)
}

if ( dolphinsScore > koalasScore ) {
    console.log(`In general - Dolphin winns!`)
} else if (dolphinsScore === koalasScore) {
    console.log(`It's a draw!`)
} else {
    console.log(`In general - Dolphin winns!`)
}

// ------------------------------------------------
console.log(`
Task 3

`)

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 2;
const sum = bill + tip;
console.log(`Rechnung plus tip: ${sum}`);


