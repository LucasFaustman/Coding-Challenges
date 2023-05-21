// 792. Number of Matching Subsequences
// Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var numMatchingSubseq = function(s, words) {
     //declare a res, and a map to hold string vals
    var result = 0;
    var map = new Map();
    for (let i = 0; i < words.length; i++){
        if (words[i].length > s.length) continue;
        if (isSubsequence(words[i], s, map)){
            result++
        }
    }
    return result
};

const isSubsequence = (word, string, map) => {
    // If the word is already in the map, return the stored result
    if (map.has(word)) return map.get(word);

    let index = -1;
    for (const c of word) {
        // Find the index of the current character in the string
        // starting from the next index after the previous occurrence
        index = string.indexOf(c, index + 1);

        // If the character is not found, the word is not a subsequence
        if (index === -1) {
            map.set(word, false); // Store the result in the map
            return false;
        }
    }

    // If all characters are found in the correct order, the word is a subsequence
    map.set(word, true); // Store the result in the map
    return true;
}
//2 Params. one will be a string, other will be array of strings. both will only consist of lowercase eng letters. always will be valid

//Return a number representing the number of words[i] that is a subsequence of s

//a subsequence of a string is a string generated from the og string with some characters deleted without changing the relatiove order or remining elements

//Input: s = "abcde", words = ["a","bb","acd","ace"]
// Output: 3
// Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".