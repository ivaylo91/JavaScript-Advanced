class Rectangle {

    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.calcArea = function () {
            return width * height;
        }
    }
}

let rect = new Rectangle(10, 12, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());