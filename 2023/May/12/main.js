// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
    //sliding window

    let max = -Infinity;
    let sum = 0;
    let windowStart = 0;

    for (let i=0 ; i < nums.length; i++) {
        sum += nums[i] //update the sum
        if (i - windowStart === k - 1) {    //check if we are in a valid window
            let average = sum/k //get the average
            max = Math.max(average,max) //update max
            sum -= nums[windowStart] //subract window value from start of window
            windowStart++
        }
    }
    return max;
};

//2 params. one will be an integer array. always will be valid. might be negative, 0, or positive nums

//also an integer k. k will always be a positive int

//Find a contigious subarray whos length is equal to k that has the max average value and return the value

//Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000