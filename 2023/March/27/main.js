// 2000. Reverse Prefix of Word
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
    //for loop through word

    for (let i= 0; i < word.length; i++) {
        let char = word[i]
        //if match found, then slice our prefix, split, reverse, join, and add the rest of the sting
        if (ch === char) {
            return word.slice(0,i + 1).split('').reverse('').join('') + word.slice(i + 1)
        }
    }
    //if nothing found, return word
    return word
};


//2 params. one will be a 0-indexed string work, and a character ch.

//Return a string where we reverse the segment of word start starts at 0 and ends at the index of the first occurence of ch
//if ch doesn't exist in the word, do nothing!


//Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".