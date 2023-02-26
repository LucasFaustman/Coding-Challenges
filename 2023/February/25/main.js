// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    //I believe I can use the sorting method
    //split, sort, map and get rid of last element of string, then join
    return s.split(' ').sort((a,b) => a[a.length - 1] - b[b.length - 1]).map(word => word.slice(0, -1)).join(' ')
};

//Will a string of words. string will always be valid and always have a length of at least 2. will consist of lowercase and uppercase english letters, spaces, and digits between 1 and 9 in string form. number of words in s is between 1 and 9, wirds are split up by a single space. s contains no leading or trailing spaces.

//Return the original shuffled sentence into the original sentence. the position of each word will be at the end of a string. ex: 'is2'

//Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.