let euclid = function (a, b) {
    return gcd(a, b);

    function gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }
};
console.log(euclid(252,105));