// 2085. Count Common Words With One Occurrence

// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays

// Constraints:

// 1 <= words1.length, words2.length <= 1000
// 1 <= words1[i].length, words2[j].length <= 30
// words1[i] and words2[j] consists only of lowercase English letters.

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 var countWords = function(words1, words2) {
    //2 hashes
    let oneHash = {};
    let twoHash = {};
    //count res variable
    let res = 0;

    for (let word of words1) {
        oneHash[word] = oneHash[word] + 1 || 1;
    }

    for (let word of words2) {
        twoHash[word] = twoHash[word] + 1 || 1;
    }

    //go through words 1 again
    //if our word in our hash1 is 1 and twohash[word] === 1, res++
    for (let word of words1) {
        if (oneHash[word] === 1 && twoHash[word] === 1) {
            res++
        }
    }
    return res;
};


//Will be 2 string arrays. arrays will always be a vvalid length. each element of each array will always be a valid string with a length of at least 1 containing only lowercase english letters

//Return the number of strings that appear exactly once in each of the two arrays

//Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.