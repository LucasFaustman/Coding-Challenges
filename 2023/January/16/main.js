// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countPairs = function(nums, k) {
    //quadratic solution
    //count
    let count = 0;

    for (let i= 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (0 <= i && i < j && j < nums.length && (i * j) % k === 0 && nums[i]== nums[j]) {
                count++
            }
        }


    }
    return count
};

//Will be 2 params. One will be an array of numbers. always will be valid, no funny business! number will always be a positive integer. other param will always be a positive integer

//Return a number representing the number of pairs inside the array where 0 <= i < j < n such that nums[i] === nums[j] and (i*j) & k === 0

//E: Input: nums = [3,1,2,2,2,1,3], k = 2
// Output: 4
// Explanation:
// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.