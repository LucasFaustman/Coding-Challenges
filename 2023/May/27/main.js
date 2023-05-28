// 821. Shortest Distance to a Character

// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// Constraints:

// 1 <= s.length <= 104
// s[i] and c are lowercase English letters.
// It is guaranteed that c occurs at least once in s.

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    let res = [];
    let indexOfCs = [];//array to hold occurences of s at a certain index
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            indexOfCs.push(i)
        }
    }

    for (let i = 0; i < s.length; i++) {
    // Initialize the minimum distance with the absolute difference between the current index and the first occurrence of character c
    let minDistance = Math.abs(i - indexOfCs[0]);

    // Iterate over the remaining occurrences of character c to find the closest one
    for (let j = 1; j < indexOfCs.length; j++) {
        // Update the minimum distance if the absolute difference between the current index and the current occurrence is smaller
        minDistance = Math.min(minDistance, Math.abs(i - indexOfCs[j]));
    }

    // Push the minimum distance to the result array
    res.push(minDistance);
}


    return res;
};


//Will be 2 params. one will be a string of all lowercase english letters.

//other will be a single character, but still lowercase eng letter. will always be a string

//c occurs at least once in s

//Return an array of integers answer where answer.length === s.length and answer[i] is the distance from index i to the closest occurence of character c in s

//Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
// The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.