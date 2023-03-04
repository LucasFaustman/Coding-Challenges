// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
// Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

// A sentence is circular if:

// The last character of a word is equal to the first character of the next word.
// The last character of the last word is equal to the first character of the first word.
// For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

// Given a string sentence, return true if it is circular. Otherwise, return false.

/**
 * @param {string} sentence
 * @return {boolean}
 */
 var isCircularSentence = function(sentence) {
    //for loop
    //split sentence into array
    sentence = sentence.split(' ')

    for (let i= 0; i < sentence.length; i++) {
        let word = sentence[i]
        //each time this runs, check if we have the last word. if so, check if last letter is equal to first char of first word
        if (i === sentence.length - 1) {
            let firstChar = sentence[0][0]
            if (word[word.length - 1] !== firstChar) {
                return false;
            } else {
                //if the last word is equal to the first word, we know the sentence is circular, so we can return true
                return true;
            }
        } 

        //if not last word, check if last char of current word is equal to first char of next word
        else {
            let nextWord = sentence[i+1]
            if (word[word.length - 1] !== nextWord[0]) {
                return false;
            }
        }
    }
};


//Will be a string representing a sentence. sentence is a list of words seperated by single space, no leading or trailing spaces. will always be a valid string with a length. consists of only lowercase and uppercase letters and spaces.

//Return a boolean true if sentence is circular. sentence is circular if

// last char of a word is equal to first char of next word
// last char of last word is equal to first char of first word

//Input: sentence = "leetcode exercises sound delightful"
// Output: true
// Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
// - leetcode's last character is equal to exercises's first character.
// - exercises's last character is equal to sound's first character.
// - sound's last character is equal to delightful's first character.
// - delightful's last character is equal to leetcode's first character.
// The sentence is circular.