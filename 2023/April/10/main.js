// 1408. String Matching in an Array

// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// All the strings of words are unique.

/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    //quadratic first!
    let res = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[i].includes(words[j]) && !res.includes(words[j])) {
                res.push(words[j])
            }
        }
    }
    return res
};

//Will be an array of strings representing words. always will be a valid string array. strings will only cosnsit of lowercase english letters, no funny business!

//Return an array of strings that qualify as a substring of another word. we can return the answer in any order
//A substring is a contiguious sequence of characters inside a string

//E::
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
