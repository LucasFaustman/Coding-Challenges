// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    //declare a min length,left, right, and sum variable
    let minimalLength = Infinity;
    let left = 0;
    let right = 0;
    let sum = 0;
    //while right < numslength
    while (right < nums.length) {
        sum += nums[right] //add to our sum

       while (sum >= target) { //while our sum is greater than or equal to our target
            minimalLength = Math.min(minimalLength, right - left + 1); //update our minlength if needed
            sum -= nums[left]; //move window by subtracted our left from sum and increasing by 1
            left++;
        }

        right++; //move window to right
    
    }


    return minimalLength === Infinity ? 0 : minimalLength;
};


//WIll be 2 paramaters. one will be an array of positive integers. always will be a valid array of positive integers, no funny business

//Other will be a single positive integer target. always valid


//Return the minimal length of a subarray whose sum of greater than or equal to our target. if no such sub array, return 0

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.