// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // //two hashmaps, then compare at the end
    // let sHash = {};
    // let tHash = {};

    // for (let char of s) {
    //     sHash[char] = sHash[char] + 1 || 1
    // }

    // for (let char of t) {
    //     tHash[char] = tHash[char] + 1 || 1;
    // }       

    // //compare at end using object.entries and join
    // return Object.entries(sHash).sort((a,b) => a[0].localeCompare(b[0])).join('-') ===
    // Object.entries(tHash).sort((a,b) => a[0].localeCompare(b[0])).join('-')


    //two splits and sort
    s = s.split('').sort()
    t = t.split('').sort()
    //edgecase, if two lengths aren't equal
    if (s.length !== t.length) {
        return false;
    }

    //for loop
    for (let i= 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false;
        }
    }

    return true;

};

//Will be two strings s and t. always will consist of lowercase english letters. always will be valid strings

//Return a boolean true if t is an anagram if s, false otherwise

//an anagram is a word or phrase formed by rearranging the ltters of a different word or phase, typically used by using og letters once

//E

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false