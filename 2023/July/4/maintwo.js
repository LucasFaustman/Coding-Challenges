// 2024. Maximize the Confusion of an Exam

// A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).

// You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:

// Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
// Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.

 /**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let hash = {'T': 0, 'F':0}; // Initialize a hash table to keep track of the count of 'T's and 'F's
    let maxOccurence = 0; // Initialize the maximum occurrence of consecutive answers to 0
    let left = 0; // Initialize the left pointer
    let right = 0; // Initialize the right pointer

    while (right < answerKey.length) {
        const ch = answerKey[right]; // Get the current answer character

        hash[ch]++; // Increment the count of the current answer

        if (hash[answerKey[right]] > maxOccurence) {
            maxOccurence = hash[answerKey[right]]; // Update the maximum occurrence if necessary
        }

        if (right - left + 1 - maxOccurence > k) {
            // If the number of answers between left and right, minus the maximum occurrence,
            // exceeds the maximum allowed operations (k), we need to move the left pointer
            // and decrement the count of the answer at that position.
            hash[answerKey[left]]--;
            left++;
        }
        right++; // Move the right pointer to the next position
    }
    return right - left; // Return the length of the longest consecutive sequence
};

//Will be 2 params. One will be an answer key, which is a string of either "T" or 'F''s. will always be at least one answer to pull from

//Other param will be a number representing the number of times we can switch the answer to something else

//Return the max number of consecutive T's or F's in the answer key after performing the operation at most k times


//E
// Input: answerKey = "TTFTTFTT", k = 1
// Output: 5
// Explanation: We can replace the first 'F' to make answerKey = "TTTTTFTT"
// Alternatively, we can replace the second 'F' to make answerKey = "TTFTTTTT". 
// In both cases, there are five consecutive 'T's.
