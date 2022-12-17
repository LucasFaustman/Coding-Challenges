// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    //create an object holding letters of alphabet
    let alphabet = {
        "a":0,
        "b": 0,
        "c":0,
        "d": 0,
        "e":0,
        "f": 0,
        "g":0,
        "h": 0,
        "i":0,
        "j": 0,
        "k":0,
        "l": 0,
        "m":0,
        "n": 0,
        "o":0,
        "p": 0,
        "q":0,
        "r": 0,
        "s":0,
        "t": 0,
        "u":0,
        "v": 0,
        "w":0,
        "x": 0,
        "y":0,
        "z": 0
    }

    //for loop that goes through our sentence and adds one to obj
    for (let i =0; i < sentence.length; i++) {
        let letter = sentence[i]
        alphabet[letter]++
    }

    //for in loop. if any letters value is 0, return false
    for (let letter in alphabet) {
        if (alphabet[letter] === 0) {
            return false
        }
    }
    return true
};

//Will be a string represnenting a sentence. always will be only lowercase english letters, no other funny business
//Return  a boolean representing true if sentence has every letter of english alphabet at least once, or false otherwise
//"Leetcode"=> false
//E: 'abcdefghijklmniopqrstuvwxyz' => true