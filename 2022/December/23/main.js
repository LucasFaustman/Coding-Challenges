// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.



/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    //we can do this with a hashmap. here is the table for morse code for all 26 letters:
  let morseCode =  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    //then array of alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    //hash
    let hash = {}

    //for loop to get morsecode object going

    for (let i= 0; i < alphabet.length; i++) {
        hash[alphabet[i]] = morseCode[i]
    }

    //maybe a map inside of a map method, then convert to set and get size

    return new Set(words.map(word => word.split('').map(char => hash[char]).join(''))).size

};

//Will be an aray of words. always will consist of lowercase english letters. will always be valid, no funny busienss
//return a number representing the number of different transofrmations  among all words we have. each concatenation of a word(combining of each character) represents a transformation
//["gin","zen","gig","msg"] => 2 because the transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--."