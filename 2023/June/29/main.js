// 917. Reverse Only Letters

// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Constraints:

// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
    s = s.split('')
    //left and right pointer. right at end, left at beginning
   let right = s.length - 1;
   let left = 0;

   // Check if there are any alphabetic characters
    let hasAlphabeticChars = s.some(char => char.match(/[a-z]/i));

    if (!hasAlphabeticChars) {
        return s.join('');
    }

    //while left < right
   while (left < right) {
       //if our left and right pointer are both letters, swap using destructuring, and iterate to our left and right
       if (s[left].match(/[a-z]/i) && s[right].match(/[a-z]/i)) {
           [s[left], s[right]] = [s[right], s[left]]
           left++
            right--
       }
        //while our next pointer is not a letter, iterate left and right
       while (!s[left].match(/[a-z]/i)) left++
       while (!s[right].match(/[a-z]/i)) right--
   }
   return s.join('')
};

//A string. string will always be valid and always have a length of at least 1. may contain any character. wont contain \ or \\ though

//Return the string, where all english letters upper or lowercase are reversed, everything else stay in same position

//Input: s = "ab-cd"
// Output: "dc-ba"