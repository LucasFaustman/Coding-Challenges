// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.



// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    //declare an array and an index count. index will keep track of index in which we might need to append a string which is longer
    let result = []
    let index = 0;

    //declare new arrays which will allow us to concat later on for appending

    let word1Arr = word1.split('')
    let word2Arr = word2.split('')

    for (let i = 0; i < word1Arr.length; i++) {
        //if iteration is valid in both arrays, push both letters to result and increment index
        if (word1Arr[i] && word2Arr[i]) {
        result.push(word1Arr[i] + word2Arr[i])
        index++
        }
    }
    //concat both arrays at our index to append any remaining letters

    return result.concat(word1Arr.slice(index)).concat(word2Arr.slice(index)).join('')
    
};

//Will be 2 strings representing words. always will be a valid string and will always contain lowercase english letters

//Return a new string which represents original 2 strings merged together in alternating order based on letter

//if string is longer than the other, append additional letters onto the end of merged string

//E:Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r