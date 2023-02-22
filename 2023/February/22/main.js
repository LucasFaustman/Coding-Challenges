// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    //create a running arr
    let runningArr = [nums[0]];
    //create running total count
    let runningCount = nums[0];
    //for loop
    for (let i= 1; i < nums.length; i++) {
            //each time we loop, add to our count, and push new count to runningarr
        runningCount += nums[i]
        runningArr.push(runningCount)
    }

    return runningArr
};

//Will be an array of nums. will always be an array. numbers will be negative or positive integers or 0

//Return an array of integers representing the running sum of nums. we define a running sum as runningsum[i] = sum(nums[0]... nums[i])

// //E:Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].