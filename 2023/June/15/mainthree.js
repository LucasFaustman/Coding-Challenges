// 5. Longest Palindromic Substring

// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

//Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    //brute force approach
    // if (s.length === 1) return s;
    // //max char
    // let longestPalindromicString = ''
    // //brute force just check each letter
    // for (let i= 0; i < s.length ;i++) {
    //     //get a curr string and store it
    //     let curr = ""

    //     for (let j = i; j < s.length; j++) {
    //         //add current char to curr
    //         curr += s[j]
    //         //if curr is equal to curr reversed, and length > 1, and curr.length> longestcurrent string, reassign longestpalindrome string
    //         if (curr === curr.split('').reverse().join('') && curr.length > longestPalindromicString.length && curr.length >= 1) {
    //             longestPalindromicString = curr;
    //         }
    //     }
    // }

    // return longestPalindromicString;

     // Initialize variables to store the longest palindrome and its length
    let res = "";
    let resLeng = 0;

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // If current substring is longer than the previous longest palindrome, update the result
            if (right - left + 1 > resLeng) {
                res = s.slice(left, right + 1);
                resLeng = right - left + 1;
            }
            left--;
            right++;
        }

        // Even length palindromes
        left = i, right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // If current substring is longer than the previous longest palindrome, update the result
            if (right - left + 1 > resLeng) {
                res = s.slice(left, right + 1);
                resLeng = right - left + 1;
            }
            left--;
            right++;
        } 
    }
    // Return the longest palindromic substring
    return res;
};


//Will be a string. will only consist of digits and english letters. digits will be a string
//Return a new string which returns the longest palindromic substring in s
//E: "babad" => "bab" 
//E: "cbbd"=> "bb"