/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
        // Convert the word to an array using split
        let wordArray = words[i].split("");
        
        // Compare the array with its reversed version
        if (wordArray.join("") === wordArray.reverse().join("")) {
            return words[i];
        }
    }
    
    return "";
};
