// 1876. Substrings of Size Three with Distinct Characters
// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

// Constraints:

// 1 <= s.length <= 100
// s​​​​​​ consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
    //declare a goodstringcount
    let goodStringCount = 0;
    //for loop
    for (let i= 0; i < s.length - 2; i++) {
        //new set to remove duplicates, s.slice(i,i+3) to get substring, if size is 3 then add to goodstringcount
        if (new Set(s.slice(i, i+3)).size === 3) {
            goodStringCount++
        }
    }

    return goodStringCount;
};

//Will be a string. always will consist of lowercase english letters and will always be valid

//Return a number representing the number of good strings of length three in s

// a string is good if there are no repeated characters

//Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".