// 647. Palindromic Substrings

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    //get res
    let res = 0;
    //for loop 
    for (let i= 0; i < s.length; i++) {
        let left = i, right = i;
        //odds
        //while our left is equal to right and left and right are in bounds, add one to res and move left and right pointers
        while (s[left] === s[right] && left >= 0 && right < s.length) {
            res++
            left--
            right++
        }

        //same thing but for even length inputs
        left = i, right = i+1
         while (s[left] === s[right] && left >= 0 && right < s.length) {
            res++
            right++
            left--
        }
    }
    return res;
};

//Will be a string. string will only consist of lowercase english letters. string will always have at least a length of 1

//return the nunber of palindrome substrings in it

//Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".