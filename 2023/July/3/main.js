// 1248. Count Number of Nice Subarrays

// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.

// Constraints:

// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10^5
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numberOfSubarrays = function(nums, k) {

    //   let oddNumberCount = 0;
    //   let left = 0;
    //   let right = 0;
    //   let count = 0;
    
    //   while (right < nums.length) {
    //     if (nums[right] % 2 !== 0) {
    //       oddNumberCount++;
    //     }
    
    //     if (oddNumberCount === k) {
    //       // Count the number of even numbers on the left side of the subarray
    //       let temp = right + 1;
    //       while (temp < nums.length && nums[temp] % 2 === 0) {
    //         count++;
    //         temp++;
    //       }
    
    //       // Count the number of even numbers on the right side of the subarray
    //       let temp2 = left;
    //       while (temp2 < right && nums[temp2] % 2 === 0) {
    //         count++;
    //         temp2++;
    //       }
    
    //       // Increment count for the current subarray
    //       count++;
    
    //       // Move the left pointer to the next position
    //       if (nums[left] % 2 !== 0) {
    //         oddNumberCount--;
    //       }
    //       left++;
    //     }
    
    //     right++;
    //   }
    
    //   return count;
    
    let numOddNumbers = 0;              // Count of odd numbers in the current window
        let numSubarraysInWindow = 0;       // Count of subarrays with exactly k odd numbers in the current window
        let numSubarrays = 0;               // Count of total subarrays with exactly k odd numbers
    
        let start = 0;                      // Start pointer of the window
        let end = 0;                        // End pointer of the window
    
        while (end < nums.length) {
            if (isOddNumber(nums[end])) {   // If the current number is odd
                numOddNumbers++;            // Increment the count of odd numbers
                numSubarraysInWindow = 0;    // Reset the count of subarrays with exactly k odd numbers
            }
    
            while (numOddNumbers === k) {   // If the window contains exactly k odd numbers
                if (isOddNumber(nums[start])) {
                    numOddNumbers--;        // Decrement the count of odd numbers as the start pointer moves
                }
    
                numSubarraysInWindow++;     // Increment the count of subarrays with exactly k odd numbers in the current window
                start++;                    // Move the start pointer to the right
            }
    
            numSubarrays += numSubarraysInWindow;  // Add the count of subarrays in the current window to the total count
            end++;                                // Move the end pointer to the right
        }
    
        return numSubarrays;     // Return the total count of subarrays with exactly k odd numbers
    };
    
    const isOddNumber = n => n % 2 !== 0;     // Helper function to check if a number is odd
    
    
    //Will be 2 params. One will be an integer array and an integer
    
    //integer array will always be valid and will always contain positive ints
    
    //integer will always be positive as well
    
    //Return the number of nice sub arrays in our parameter. a subarray is nice if there are k odd numbers on it
    
    //Example 1:
    
    // Input: nums = [1,1,2,1,1], k = 3
    // Output: 2
    // Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].