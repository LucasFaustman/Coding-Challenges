// 152. Maximum Product Subarray

// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    // //quadtratic
    // let maxProduct = -Infinity;

    // //for loop nested
    // for (let i = 0; i < nums.length; i++) {
    //     let curr = 1;
    //     for (let j = i; j < nums.length; j++) {
    //         //add to our curr
    //         curr *= nums[j] 
    //         if (curr > maxProduct) { //if curr > current max, reassign current max to curr
    //             maxProduct = curr;
    //         }
    //     }
    // }

    // return maxProduct === -Infinity ? 0 : maxProduct;
    

        //declare a prevmax, prev min, and result. we need the prev min because the next number * prevmin might end up the largest number!
       let prevMax = nums[0];
        let prevMin = nums[0];
        let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
       let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

		// updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
};

//Will be an integer arrays numbers. always an array.always integers. either negative, 0, or positive

//FInd a subarray that has the largest product, and RETURN the product

//Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.