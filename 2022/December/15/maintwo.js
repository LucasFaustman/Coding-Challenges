// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //create hash
   let hash = {}   
//forloop
   for (let i = 0; i < nums.length; i++) {
       let n = nums[i]
    //if we have a value in our hash if we minus it from our target is >= 0, return it plus our current i
       if (hash[target - n] >= 0) {
           return [hash[target - n],i]
           //else assign hash[n] to i
       } else {
           hash[n] = i
       }
   }
};

//Will be an array of integers and a target. always will have a solution.
//Return indices of two numbers such that they add up to our target
//[2,7,11,15], taget is 9, 0,1 because 2 + 7 is 9