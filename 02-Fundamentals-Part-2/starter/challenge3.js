const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.68,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        this.bmi = (this.mass / this.height ** 2).toFixed(1);
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2).toFixed(1);
        return this.bmi
    }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi > john.bmi ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})` : `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName} (${mark.bmi})`)
