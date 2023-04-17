// 2278. Percentage of Letter in String
// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

// Constraints:

// 1 <= s.length <= 100
// s consists of lowercase English letters.
// letter is a lowercase English letter.

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
 var percentageLetter = function(s, letter) {
    //get the length of s
    let sLength = s.length;
    let count = 0;

    //for each method
    s.split('').forEach(char => char === letter ? count++ : 0)
    //return using math.floor
    return Math.floor(count / sLength * 100)
};

//2 Params. one will be a string of letters, and the other will be a single character. always will be valid string, always will consist of lowercase english letters

//Return the percentage of the letter that is found inside of the string, rounded down to the nearest percentage

//Input: s = "foobar", letter = "o"
// Output: 33
// Explanation:
// The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.