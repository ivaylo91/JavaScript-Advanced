//sorting array by their area and sorting in descending order.

function createRectangle(width, height) {

    let rect = {
        width: width,
        height: height,
        area: () => rect.width * rect.height,
        compareTo: function (other) {
            let result = other.area() - rect.area();
            return result || (other.width - rect.width);
        },
        toString: function () {
            return `rect[${this.width} x ${this.height}]`;
        }
    };
    return rect;
}

let myRectangle = createRectangle(7, 5);
let otherRect = createRectangle(20, 16);
let equalAreRect = createRectangle(5, 7);
let rectArr = [myRectangle, otherRect, equalAreRect];
console.log(rectArr.map(e => e.toString())); // before sort

rectArr.sort((a, b) => a.compareTo(b));

console.log(rectArr.map(e => e.toString())); //after sort