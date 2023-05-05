// 387. First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    //hashmap?
    let hash = {};

    for (let char of s) {
        hash[char] = hash[char] + 1 || 1;
    }

    //then another loop. loop through s, if hash is equal to 1, return i.

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (hash[char] === 1) {
            return i;
        }
    }
    //return -1 if no match
    return -1;
};

//Will be a string. always will consist of lowercase eng letters. always will be valid

//Return the first non repeating character and return the index. if doesn't exist, return -1

//E 

//Input: s = "leetcode"
//Output: 0