// 131. Palindrome Partitioning

// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    // DFS function to generate palindrome partitions
    let res = []; // Array to store the resulting partitions
    dfs(0, []); // Start the DFS from index 0 with an empty subset
    return res; // Return the resulting partitions

    function dfs(index, subset) {
        // Base case: if we have reached the end of the string
        if (index === s.length) {
            res.push(subset.slice()); // Add a copy of the subset to the result
            return; // Return to backtrack
        }

        // Recursive cases: explore different possibilities
        for (let i = index; i < s.length; i++) {
            // Check if the current substring is a palindrome
            if (isPalindrome(s, index, i)) {
                subset.push(s.substring(index, i + 1)); // Add the palindrome substring to the subset
                dfs(i + 1, subset); // Recursively explore the remaining part of the string
                subset.pop(); // Backtrack: remove the last palindrome substring added
            }
        }
    }

    // Helper function to check if a substring is a palindrome
    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false; // If characters don't match, it's not a palindrome
            }
            left++;
            right--;
        }
        return true; // All characters matched, it's a palindrome
    }
};

//Will be a string. always will have a length of at least 1. always will be a valid string containing lowercase english letters

//Return all possible palindrome partioning of s.

//Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]