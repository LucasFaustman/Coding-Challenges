// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.


/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
    //hash broken letters
    //quadratic
    //split array
    text = text.split(' ')
    let hash = {}
    let count = 0
    //first for loop add broken letters to hash
    for (let letter in brokenLetters) {
        console.log(hash)
        hash[brokenLetters[letter]] = true;
    }
    //quadratic that goes through each letter of each word
    //if letter is in hash, break
    //if we get to the end of a length of a letter, add 1 to count
    for (let i= 0; i < text.length; i++) {
        let word = text[i]
        for (let j = 0; j < word.length; j++) {
            let letter = word[j]
            if (hash[letter]) {
                break;
            } else if (j === word.length - 1) {
                count++
            }
        }
    }
    return count
};

//Will a string of words seperated by single space, no trailing or leading spaces. other param will be a string of distinct letters.
//no funny business on either param
//Return a count representing the amount of words in the first param that dont include letters from 2nd param
//"hello world", "ad" => 1 because only hello doesnt contain broken letters