// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    //hashmap
    let hash = {}
    //for loop
    for (let i =0; i < nums.length; i++) {
        //if theres a match, return true
        if (hash[nums[i]]) {
            return true
            //else add to hash
        } else {
            hash[nums[i]] = true
        }
    }
    //return false if no dups found
    return false
};

//Will be an array of integers. integers will always be valid. never strings, symbolbs, invalid, etc. always integers. might be negative
//Return a boolean representing true if any value appears at least twice in array, false if no duplicates
//E: [1,1,2] => true because 1 appears twice
//[1,2,3,4] => false because no duplicates