// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    //split s into an array of words
    s = s.split(' ')
    //edge cases: if the length of the pattern and s are not the same, then they can't follow the same pattern
    if (pattern.length !== s.length) return false;
    //edge cases: if the number of unique elements in pattern and s are not the same, then they can't follow the same pattern
    if (new Set(pattern).size !== new Set(s).size) return false;

    //initialize a new Map object
    let map = new Map()
    //iterate through pattern and s
    for (let i = 0; i < pattern.length; i++) {
        //if pattern[i] does not exist as a key in the map, set pattern[i] as a key and s[i] as its value in the map
        if (!map.has(pattern[i])) {
            map.set(pattern[i], s[i])
        }
        //if pattern[i] exists in the map and its value is not s[i], then s does not follow the same pattern as pattern, so return false
        if (s[i] !== map.get(pattern[i])) {
            return false;
        }
    }
    //if we have not returned false by this point, then s follows the same pattern as pattern, so return true
    return true
};


//Will be two strings. always will be 2 valid strings. 
//s
//will be string of words
//only contains lowercase english letters and spaces ' '
//does not contain leading or trailing spaces
//all words in s seperated by single space

//pattern
//only contains lowercase english letters


//Return a boolean true if s follows the same pattern

//each char in pattern represents a word
//no distinct characters in pattern can represent same word in s
//no single char in pattern can represent two distinct words in s

//Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false