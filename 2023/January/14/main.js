// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.



/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    //I can probably sort the array first
    let sortedNums = nums.sort((a,b) => a - b)

    //then do calculation grabbing last 2 nums and first 2

    return (sortedNums[sortedNums.length - 1] * sortedNums[sortedNums.length - 2]) - (sortedNums[0] * sortedNums[1])
};


//Will be an array of nums. nums will always be positive integers. no funny business, always valid.
//Return the maximum product difference between 2 pairs(a,b) and (c,d) where (a*b) - (c*d)
//[5,6,2,7,4] => (7*6) - (2*4) -> 34