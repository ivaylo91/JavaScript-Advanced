class Circle {

    constructor(radius) {

        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {

        if (diameter < 0) {

            throw new RangeError(' Diameter must be positive number.');

        }
        this._radius = diameter / 2;
    }

    get area() {
        return (this.radius ** 2 * Math.PI).toFixed(2);
    }

}

let circle = new Circle(2);
console.log(circle.diameter);
console.log(circle.area);

circle.diameter = 8;
console.log(circle.diameter);
console.log(circle.radius);
console.log(circle.area);

