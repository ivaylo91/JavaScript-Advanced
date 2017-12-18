let fatherCar = {
    brand: 'BMW',
    model: 'X5',
    color: 'blue',
    toString: function () {
        return `brand:${this.brand},model: ${this.model}, color:${this.color}`
    }
};
console.log('' + fatherCar);

// Inheritance

let myCar = Object.create(fatherCar); // Factory Pattern
myCar.color = 'red';
myCar.model = 'M3';
myCar.topSpeed = 330;
myCar.toString = function () {
    return `brand:${this.brand},model: ${this.model}, color:${this.color} , topSpeed:${this.topSpeed}`;
};
console.log('' + myCar);



