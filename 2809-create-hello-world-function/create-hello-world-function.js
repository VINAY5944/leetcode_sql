/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        let s= "Hello World";
        return s
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */