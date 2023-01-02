// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var minSteps = function(s, t) {
    //hash and count
    let hash = {}
    let count = 0

    //hash all occurences of letters from t
    for (let char of t) {
        hash[char] =  hash[char]  + 1 || 1
    }
    //then loop through s. if theres a match, minus our occurence by 1. if no match or falsy(0), add to count
    for (let char of s) {
        if (hash[char]) {
            hash[char] -= 1
        } else {
            count++
        }
    }
    return count
};

//two strings of the same length as params. will only consist of lowercase english letters, nothing else!
//Return an integer representing the maximum number of steps to make t an anagram of s. an anagram is a string that contains same characters with a different or same ordering
//E: "bab", "aba" => 1, because we just need to swap out the first a with a b to make it an anagram

//E"leetcode", "practice" => 5
//we need to replace p,r,a,i,c