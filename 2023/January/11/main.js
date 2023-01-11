// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {

    

    if (t.length < s.length) {
        return false
    } 
    //declare index variable
    let index = 0

    //loop through t
    for (let i= 0; i < t.length; i++) {
        //if our character is equal to s[index], index++
        if (t[i] === s[index]) {
            index++
        }
    }
    //will be true if our index is equal to s.length

    return index === s.length
};

//Will be 2 params. both are strings of only lowercase english letters, nothing else! always valid.
//return true if s is a subsequence of t. a subsequence is a string that is formed from the original string by deleteing some characters without disturbing the relative positions of remaining chars
//E: "abc", "ahbgdc" => true, because if we removed all letters not in first param in second param, it would turn out to be abc