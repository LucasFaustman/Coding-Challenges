// You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

// For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.

// An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {

    if (nums.length < 2) {
        return 0;
    }

    //declare out count
    let count = 0

    //for loop

    // for (let i= 0; i < nums.length; i++) {
    //     //while loop. while our iterator is less than next number, increase number by 1 and add to count
    //     while (nums[i] >=  nums[i+1]) {
    //         nums[i+1]++
    //         count++
    //     }
    // }

    //instead of a while loop, which takes a lot more time, i can do the calculation for how much we need to add by in one go
    for (let i= 1; i < nums.length; i++) {
        if (nums[i] <= nums[i-1]) {
            let difference = nums[i-1] - nums[i] + 1;
            count += difference;
            nums[i] += difference
        }
    }
    return count
};

//Will be an array of numbers. always will be array of positive integers.
//Return the minimum number of operations needs to make nums strictly increasing.

//the array is strictly increasing if nums[i] < nums[i+1] for all elements of the array. an array of length 1 is always strictly increasing

//Input: nums = [1,1,1]
// Output: 3
// Explanation: You can do the following operations:
// 1) Increment nums[2], so nums becomes [1,1,2].
// 2) Increment nums[1], so nums becomes [1,2,2].
// 3) Increment nums[2], so nums becomes [1,2,3].