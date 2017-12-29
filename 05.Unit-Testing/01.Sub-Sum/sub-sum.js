/*
Write a JS function to sum a range of numeric elements from array. The function takes three parameters – the first
is an array, the second is start index and the third is an end index. Both indexes are inclusive. Assume array
elements may not be of type Number and cast everything. Implement the following error handling:
 - if the first element is not an array, return NaN
 -  if the start index is less than zero, assume it is zero
 - if the end index is outside the bounds of the array, assume it points to the last index of the array
 */

function subSum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

console.log(subSum([10, 20, 30, 40], -1, 2)); // 60
console.log(subSum([10, 20, 30, 40], 1, 20)); // 90
console.log(subSum([10, 20, 30, 40], 1, 2)); //50
console.log(subSum('pesho', 1, 2)); // NaN
console.log(subSum({}, 1, 2)); // NaN
console.log(subSum(['10', '20', '30'], 1, 2)); // 50
console.log(subSum([1.1, 1.1, 1.1], -1, 20).toFixed(1));//3.3