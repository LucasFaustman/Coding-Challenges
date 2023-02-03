// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

// Return the number of strings in words that are a prefix of s.

// A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
 var countPrefixes = function(words, s) {
    //declare a count
    let count = 0;
    //then quadratic for loop
    for (let i= 0; i < words.length; i++) {
        let word = words[i]
        for (let j = 0; j < word.length; j++) {
            //if letter in word is not equal to s at the same iteration, break loop and move on
            if (word[j] !== s[j]) {
                break
                //else if we get through all letters, add to count
            } else if (j === word.length - 1) {
                count++
            }
        }
    }
    //return
    return count
};

//Given an array of strings. only will contain lowercase english letters. will always be a valid array with valid strings. also givien a string. unclear if always will be a string or if always valid!

//Return the number of strings in words that are a prefix of s


//Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
// Output: 3
// Explanation:
// The strings in words which are a prefix of s = "abc" are:
// "a", "ab", and "abc".
// Thus the number of strings in words which are a prefix of s is 3.