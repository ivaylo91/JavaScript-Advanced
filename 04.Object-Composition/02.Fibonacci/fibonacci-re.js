let fib = (function () {
    let f0 = 0;
    let f1 = 1;

    return function () {
        let old0 = f0;
        let old1 = f1;
        f0 = old1;
        f1 = old0 + old1;

        return f0;
    }
})();

console.log(fib());// 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5;