// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.


/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    //i need a hashtable with each count of each letter
    //and a count variable
    let hash = {};
    let count  = 0;
    //for loop
    for (let char of s) {
        hash[char] = hash[char] + 1 || 1;
        //if our key mod 2 is 0, then add 2 to count
        if(hash[char] % 2 === 0) {
            count += 2;
        }
    }
    //if count is less than s.length, then we know that there is an odd number of letters. meaning, that if there is a single letter we didnt count, we need to add to our total count

    //else just return count
    return count < s.length ? count + 1 : count;

};

//Will be a string. always will have a length and be a valid string. only will consist of upper or lowercase english letters

//return a number representing the length of the longest palindrome that can be built with those letters
//letters are case sensitive, meaning 'Aa' would not be co nsidered a palindrome

//E:

//Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.