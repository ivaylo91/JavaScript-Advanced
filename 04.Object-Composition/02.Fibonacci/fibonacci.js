function solution(n){

    let fib = (function solve() {
        let f1 = 0;
        let f2 = 1;

        return function fib() {
            let f3 = f1 + f2;
            [f1,f2] = [f2,f3];
            console.log(f1);
        };
    })();

    for (let i = 0; i < n; i++) {
        fib();
    }
}

solution(6);
