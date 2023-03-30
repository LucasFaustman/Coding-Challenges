// 2108. Find First Palindromic String in the Array
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists only of lowercase English letters.

/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    //nested loop of some sort

    for (let word of words) {

        // if (word === word.split('').reverse().join('')) {
        //     return word;
        // }
        //declare a palindrome variable
       let isPalindrome = true;
       //go from 0 to middle of word
        for (let i = 0; i < Math.floor(word.length / 2); i++) {
            //if our letter is not equal to the letter on opposite side, break and reassign palindrome to false
            if (word[i] !== word[word.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        //if palindrome is positive, then return the word
        if (isPalindrome) {
            return word;
        }
        

    }
    return ''
};

//Will be an array of strings. each string will be a valid length and valid string. each array will be a valid arr of strings and always will have a length
//always will consist of lowercase english letters

//Return the first palindromic string in the array. if there is no such string, return an empty string

//a strring is palindromic if it reads the same forwards and backwords

//Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.