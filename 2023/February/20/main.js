// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    //I believe we can use join and === on both words to join the array together into a combined string
    return word1.join('') === word2.join('')
};

//Will be 2 params. Both will be string arrays. string arrays will always be valid and always be valid strings. will only consist of lowercase english letters

//Return true if arrays represent the same string, false otherwise

//E:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true..