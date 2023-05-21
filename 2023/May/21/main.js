// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums, maxScore = 0) {

    //Brute force


    // if (nums.length < 1) {
    //     return 0
    // }
    // //sort the array first
    // //then a for loop. keep a curr and max value
    // //if our current element +1 is equal to nums[i+1], add to curr
    // //if max is less than curr, max = curr

    
    // nums = Array.from(new Set(nums.sort((a,b) => a - b))) //get rid of duplicates with set and sort array
    // let max = 0;
    // let curr = 0;

    // for (let i=0; i < nums.length ; i++) {
    //     if (nums[i] + 1 === nums[i + 1]) { //if our current number + 1 is equal to nums[i] + 1, iterate curr
    //         curr++
    //     } else { //if we get to our last number, add another to curr, reassign max if necessary, and bring back curr to 0
    //         curr++
    //         max = Math.max(max, curr)
    //         curr = 0;
    //     }
    // }

    // return max;


    const numSet = new Set(nums);         // Create a set to store unique numbers from the input array
    // Time complexity: O(N) | Space complexity: O(N)

    for (const num of [ ...numSet ]) {    // Iterate through each number in the set
        const prevNum = num - 1;

        if (numSet.has(prevNum)) continue; // Skip the current number if its previous number exists in the set
        // Time complexity: O(N)

        let [ currNum, score ] = [ num, 1 ]; // Initialize variables for the current number and the score (consecutive sequence length)

        const isStreak = () => numSet.has(currNum + 1);
        // Helper function to check if there is a streak (next consecutive number) in the set

        while (isStreak()) {              // Iterate as long as there is a streak
            currNum++;                    // Move to the next consecutive number
            score++;                      // Increase the score (consecutive sequence length)
        }
        // Time complexity: O(N)

        maxScore = Math.max(maxScore, score); // Update the maximum score if necessary
    }

    return maxScore; // Return the maximum score (length of the longest consecutive sequence)
};

//Will be an unsorted array of ints. always will be a valid unsorted array of ints, no funny business. might be positive, negative, or 0

//Return the length of the longest consecutive element sequence

//Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.