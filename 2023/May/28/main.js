// 424. Longest Repeating Character Replacement
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let left = 0; // Left pointer of the sliding window
    let right = 0; // Right pointer of the sliding window
    let maxCharCount = 0; // Maximum count of any character in the window
    const visited = {}; // Object to store the count of visited characters
  
    while (right < s.length) { // Iterate until the right pointer reaches the end of the string
      const char = s[right]; // Get the character at the right pointer
      visited[char] = visited[char] + 1 || 1; // Increment the count of the visited character
  
      if (visited[char] > maxCharCount) {
        maxCharCount = visited[char]; // Update the maximum character count if necessary
      }
  
      if (right - left + 1 - maxCharCount > k) {
        // If the number of characters in the window minus the maximum character count exceeds k
        visited[s[left]]--; // Decrement the count of the character at the left pointer
        left++; // Move the left pointer to shrink the window
      }
  
      right++; // Move the right pointer to expand the window
    }
    return right - left; // Return the length of the longest substring with the same letter
  };
  
  
  //A string and an integer. string will always consist of uppercase english letters. always a valid string
  
  //k will always be 0 or greater. always will be an integer.
  
  //Return the length of the longest sub string containing the same letter you can get after performing...
  
  //choose any letter of string and change it to an uppercase letter, at most k times
  
  //Example 1:
  
  // Input: s = "ABAB", k = 2
  // Output: 4
  // Explanation: Replace the two 'A's with two 'B's or vice versa.
  // Example 2:
  
  // Input: s = "AABABBA", k = 1
  // Output: 4
  // Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
  // The substring "BBBB" has the longest repeating letters, which is 4.
  // There may exists other ways to achive this answer too.