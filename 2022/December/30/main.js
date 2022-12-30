// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var divideArray = function(nums) {
    //hashmap
    let hash = {}
    //for loop
    for (let i= 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] + 1 || 1
    }
    //object.values at end. if mod 2 is === 0 on every element, then return true
    return Object.values(hash).every(num => num % 2 === 0)
};

//Will be an array of numbers. always will be an even number of integers. always will be a positive integer, no funny business
//Return a boolean representing true if nums can be dvidied into pairs such that each element belongs to exactly one pair, and elements present in a pair are equal
//E: [3,2,3,2,2,2] => true because (2,2), (3,3) , (2,2) 
//[1,2,3,4] = false