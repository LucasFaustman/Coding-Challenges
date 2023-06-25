// 1903. Largest Odd Number in String

// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

// Constraints:

// 1 <= num.length <= 105
// num only consists of digits and does not contain any leading zeros.

/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function(num) {
    //if last int is odd, then return the whole string
    if (num[num.length - 1] % 2 !== 0) {
        return num;
    }

    //have a running string representing the largest odd integer
    //start from back of string. if we hit an odd number, return nums.slice(0, i+1)
    for (let i = num.length - 1; i >=0 ; i--) {
        if (num[i] % 2 !== 0) {
            return num.slice(0, i+1)
        }
    }

    //if no odd nums found, return empty string
    return ""
};

//Will be a string num, representing a large integer. always will be a string with a length of at least 1. only cosnsist of digits and will never contain leading 0's

//Return the largest valued odd integer(as a string) that is a non empty substring of ""

//or an empty string "" if no odd integer exists

// //Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.