// 1358. Number of Substrings Containing All Three Characters
// Given a string s consisting only of characters a, b and c.

// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

/**
 * @param {string} s
 * @return {number}
 */
 var numberOfSubstrings = function(s) {
    let res = 0;  // initialize the result variable to 0
    let a = 0, b = 0, c = 0; // initialize the occurrence counts of each character to 0

    for (let i = 0, j = 0; i < s.length; i++) {  // iterate through the string with two pointers i and j
        // update the occurrence counts of characters a, b, and c
        if (s[i] == 'a') a++;
        if (s[i] == 'b') b++;
        if (s[i] == 'c') c++;

        // if the current window contains at least one occurrence of all three characters
        while (a && b && c) {
            res += s.length - i; // add the number of remaining substrings to the result
            // move the left end of the window to the right and update the occurrence counts accordingly
            if (s[j] === 'a') a--;
            if (s[j] === 'b') b--;
            if (s[j] === 'c') c--;
            j++;
        }
    }

    return res; // return the final result
};


//Will be a string consisting of only characters a,b,c. always will be valid

//Return the number of substrings containing at least one occurence of all these characters, a b and c

//Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 