class Figure {

    constructor() {
        if (new.target === Figure) {
            throw new TypeError('abstract class cannot initialize');
        }
    }

    get area() {
        switch (this.constructor) {
            case Circle:
                return Math.PI * (this.radius) ** 2;
            case Rectangle:
                return this.width * this.height;

        }
    }

    toString() {
        return this.constructor.name;
    }
}

class Circle extends Figure {

    constructor(radius) {
        super();
        this.radius = radius;
    }

    toString() {
        return `${super.toString()} - radius:${this.radius}`;
    }
}

class Rectangle extends Figure {

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    toString() {
        return `${super.toString()} - width:${this.width},height:${this.height}`;
    }
}

let circle = new Circle(5);
console.log(circle.area);
console.log(circle.toString());
let rectangle = new Rectangle(3, 4);
console.log(rectangle.area);
console.log(rectangle.toString());