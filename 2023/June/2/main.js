// 1800. Maximum Ascending Subarray Sum
// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.

// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi  < numsi+1. Note that a subarray of size 1 is ascending.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    //kandes algo
    //declarea max asc subarr sum
    let res = nums[0];
    let curr = nums[0];
    //for loop
    for (let i= 1; i < nums.length; i++) {
        //if we are in asc pattern, add to curr
        if (nums[i] > nums[i-1]) {
            curr += nums[i]
        } else { //if no longer in asc pattern, reassign our curr to our current number, restarting the sub array
            curr = nums[i]
        }

        res = Math.max(curr, res) //reassign res to max of curr or res
    }

    return res;
};


//Will be an array of positive integers. always integers. no funny business!

//Return the max possible sum of ascending subarray in nums

//Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.