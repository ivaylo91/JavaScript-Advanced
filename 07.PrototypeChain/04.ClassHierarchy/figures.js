class Figure {

    constructor() {
        if (new.target === Figure) {
            throw new TypeError('abstract class cannot initialize');
        }
    }
}

class Circle extends Figure {

    constructor(radius) {
        super();
        this.radius = radius;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }

    toString() {
        let className = this.constructor.name;
        return `${className} - radius:${this.radius}`;
    }
}

class Rectangle extends Figure {

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    toString() {
        let className = this.constructor.name;
        return `${className} - width:${this.width},height:${this.height}`;
    }
}

let circle = new Circle(5);
console.log(circle.area.toFixed(2));
console.log(circle.toString());
let rectangle = new Rectangle(3, 4);
console.log(rectangle.area);
console.log(rectangle.toString());