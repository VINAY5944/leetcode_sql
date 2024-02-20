/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    const bit = n.toString(2);
    const len = bit.length;

    let a = 0;

    for (let i = 0; i < len; i++) {
        if (bit[i] === '1') {
            a = a + 1;
        }
    }

    return a;
};




