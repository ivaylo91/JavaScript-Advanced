// closure === state closed inside a function. Hidden from outside.

function counterClosure() {
    let counter = 0;

    return function getNextCounter() {
        return ++counter;
    }
}

let count = counterClosure();
console.log(count()); // 1
console.log(count()); // 2