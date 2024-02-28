/**
 * @param {number} n - Number of elements
 * @param {number} start - Starting value
 * @return {number} - Bitwise XOR of all elements without using an array
 */
var xorOperation = function (n, start) {
    let result = start;

    // Loop to calculate XOR without explicitly creating an array
    for (let i = 1; i < n; i++) {
        result ^= (start + 2 * i);
    }

    return result;
};
