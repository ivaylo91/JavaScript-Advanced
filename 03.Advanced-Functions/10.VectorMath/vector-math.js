let solve = (function () {

    return {
        add: function (vec1, vec2) {

            return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
        },
        multiply: function (vec1, scalar) {

            return [vec1[0] * scalar, vec1[1] * scalar];
        },
        lenght: function (vec1) {

            return Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2));
        },
        dot: function (vec1, vec2) {
            return vec1[0] * vec2[0] + vec1[1] * vec2[1];
        },
        cross: function (vec1, vec2) {

            return vec1[0] * vec2[1] - vec1[1] * vec2[0];
        }
    }
})();

console.log(solve.add([1, 1], [1, 0])); // [1+1,1+0] = [2,1]
console.log(solve.multiply([3.5, -2], 2)); // [3.5*2, (-2)*2] = [7,-4]
console.log(solve.lenght([3, -4])); // sqrt(3*3 + (-4)*(-4)) = 5
console.log(solve.dot([1, 0], [0, -1])); // 1*0 + 0*(-1) = 0
console.log(solve.cross([3, 7], [1, 0])); // 3*0 - 7*1