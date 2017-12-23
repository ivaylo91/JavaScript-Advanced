let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.last = function () {
    return this[this.length - 1];
};
Array.prototype.skip = function (n) {
    let result = [];

    for (let i = n; i < this.length; i++) {
        result.push(this[i]);
    }
    return result;
};
Array.prototype.take = function (n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(this[i]);
    }
    return result;
};
Array.prototype.sum = function () {

    let result = 0;

    for (let i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result;
};
Array.prototype.average = function () {
    let sum = this.sum();
    return sum / this.length;
};

console.log(arr.last());
console.log(arr.skip(2));
console.log(arr.take(3));
console.log(arr.sum());
console.log(arr.average());