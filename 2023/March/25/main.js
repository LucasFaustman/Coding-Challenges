// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    // construct array of size n+1, to leave a spot for the missing element.
	// Assign each val to -1 so we can see which position was not filled
    const res = new Array(nums.length+1).fill(-1);

	// "sort" the elements by assigning to the array based on val
    // O(n)
    for(const num of nums) {
        res[num] = num;
    }
    
	// the remaining -1 index is the missing value
    return res.indexOf(-1);
    
    
};

//WIll be an array of numbers. always will be a valid array. nums will always be integers. always will be positive integers. all numbers will be unique.

//return the missing number from the array. there will be at least one number missing guaranteed

//Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.