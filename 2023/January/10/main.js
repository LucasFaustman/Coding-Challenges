// You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated in the following way:

// nums[0] = 0
// nums[1] = 1
// nums[2 * i] = nums[i] when 2 <= 2 * i <= n
// nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
// Return the maximum integer in the array nums​​​.

/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    //create new array
    let nums = [0,1]

    //for loop
    for (let i= 0; i < n; i++) {
        if (2 <= 2 * i && 2 * i  <= n) {
           nums[2 * i] = nums[i]
        }  if (2 <= 2 * i + 1 && 2 * i + 1 <= n) {
           nums[2 * i + 1] = nums[i] + nums[i+1]
        }
    }
    //then return max of arr
    return Math.max(...nums)
};

//I am given an integer n. always will be a positive integer, no funny business!
//return an integer representing the max integer in the array nums.
//first integer of array is 0
//second 1
//then its random! if 2 <= 2 * i <= n, then nums[2*i] = nums[i]
//if 2 <= 2 * i + 1 <= n, then nums[2 * i + 1] = nums[i] + nums[i+1]