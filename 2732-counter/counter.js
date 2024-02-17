/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
  let counterValue = n;

  return function() {
    const currentValue = counterValue;
    counterValue++;
    return currentValue;
  };
};

const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
