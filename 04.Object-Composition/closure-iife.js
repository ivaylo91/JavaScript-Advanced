let counter = (function () {
    let count = 0;

    return function () {
        return ++count;
    }
})();

console.log(counter()); // 1
console.log(counter()); // 2