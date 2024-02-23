/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
if(x==0){
    return 0
}

if(x==1){
    return 1
}

    for (let i = 1; i <= x; i++) {
        let root = x / i;
        if (root < i) {
            return i - 1; // Return the previous value of i
        }
    }
};

// Test
console.log(mySqrt(5)); // Output: 2
