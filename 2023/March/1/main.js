// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

// Return the number of '*' in s, excluding the '*' between each pair of '|'.

// Note that each '|' will belong to exactly one pair.

/**
 * @param {string} s
 * @return {number}
 */
 var countAsterisks = function(s) {
    //I can try splitting at each |
    //then filter by index. if index mod 2 is 0, then we count that asterik
    //then we can create a new set and find the number of *'s
   let nonPairedStrings = s.split('|').filter((element,index) => index % 2 === 0)

  return nonPairedStrings.join('').split('').reduce((acc,char) => char === '*' ? acc += 1 : acc,0)
};


//Willbe a string. Will always be a string consting of lowercase english letters, vertical bars '|' and asteriks *. always will be an even number of |'s

//Return the number of *'s in s, excluding the *'s between each pair of |'s

// 1st and 2nd | make a pair, 3rd and forth make a pair, but not whats in between 0 and 1, and 2 and 3 for instance

//EInput: s = "l|*e*et|c**o|*de|"
// Output: 2
// Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
// The characters between the first and second '|' are excluded from the answer.
// Also, the characters between the third and fourth '|' are excluded from the answer.
// There are 2 asterisks considered. Therefore, we return 2.