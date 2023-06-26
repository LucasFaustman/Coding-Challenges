// 1961. Check If String Is a Prefix of Array

// Given a string s and an array of strings words, determine whether s is a prefix string of words.

// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

// Return true if s is a prefix string of words, or false otherwise.

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// 1 <= s.length <= 1000
// words[i] and s consist of only lowercase English letters.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
 var isPrefixString = function(s, words) {
    //hold a global string value
    //loop through words, each word, we add to string value

    //if string value at any point is equal to s, return true
    //if we get through the loop, return false

    let prefix = ""

    for (let word of words) {
        prefix += word;

        if (prefix === s) {
            return true;
        }
    }
    return false;
};

//Two params. one will be a string. thsi string will always have a valid length and always will be a string. 

//both params consist of only lowercase english letters

//Other param is an array of strings words. always will be a valid array of strings

//Return true if s is a prefix string of words, false otherwise

// a string s is a prefix of words if s can be made by concatenating the first k amount of strings in words

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.

// Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
// Output: false
// Explanation:
// It is impossible to make s using a prefix of arr.