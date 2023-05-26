// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    // If the length of nums array is less than 3, there can't be any triplets
    if (nums.length < 3) {
        return [];
    }
    
    // Declare a result array to store the triplets
    let res = [];
    
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current number is greater than 0, we can't find a triplet sum equal to 0
        if (nums[i] > 0) {
            break;
        }
        
        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        // Set two pointers: start and end
        let start = i + 1;
        let end = nums.length - 1;
        
        // Use two pointers to find the remaining two numbers that sum up to the target
        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end];
            
            if (sum === 0) {
                // Found a triplet with sum equal to 0
                res.push([nums[i], nums[start], nums[end]]);
                
                // Move the pointers to find the next distinct triplet
                start++;
                end--;
                
                // Skip duplicates
                while (start < end && nums[start] === nums[start - 1]) {
                    start++;
                }
                
                while (start < end && nums[end] === nums[end + 1]) {
                    end--;
                }
            } else if (sum < 0) {
                // The sum is too small, move the start pointer to increase the sum
                start++;
            } else {
                // The sum is too large, move the end pointer to decrease the sum
                end--;
            }
        }
    }
    
    return res;
};

//Will be an array of integers. array of ints will always be valid, numbers might be negative, 0, or positive

//Return all the triplets nums[i], nums[j], nums[k] such that i !== j and i!==k and j!==k and nums[i] + nums[j] + nums[k] === 0

//Solution set cant contain duplicate triplets

//Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.