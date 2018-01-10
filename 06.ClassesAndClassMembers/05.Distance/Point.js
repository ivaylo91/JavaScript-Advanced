class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}

let points1 = new Point(5, 5);
let points2 = new Point(9, 8);
console.log(Point.distance(points1, points2));

