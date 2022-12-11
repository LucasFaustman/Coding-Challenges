// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    // //quadratic
    // //2 for loops. if i === j, AND our math.abs(index i - index j <= k), then true!

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 1; j < nums.length;j++) {
    //         if (nums[i] === nums[j] && i !== j && Math.abs(i - j) <= k) {
    //             return true
    //         }
    //     }
    // }

    // return false

    //new set

    let newMap = new Map()

//for loop
    for (let i = 0; i < nums.length; i++) {
        //if our map has nums[i]
        if (newMap.has(nums[i])) {
            //then get that value and assign it to j(the index)
            const j = newMap.get(nums[i])
            //if i - j <= k, return true
            if (Math.abs(i - j) <= k) {
                return true
            } 
        } //every loop, set our nums[i] and the index too
            newMap.set(nums[i], i)
        
    }

    return false
};

//Will be 2 params. One will be an array of numbers. unclear if always will be numbers. what about strings, negative numbers, or symbols? second param will always be a positive integer.
//Return true if there are two distinct indices in the array such that nums[i] === nums[j] AND abs(i - j) <= k
//E: [1,2,3,1],3 => 1 and 1, 0 - 3 is 3 which is <= 3
//E: [1,0,1,1],1 => 0 and 1, 1 - 1 is 1, which is <= 1
//E[1,2,3,1,2,3],2 => false! (1,1 would be true, but 0 -3 which is 3 not <= 2. )
//(2,2 => 1,4 => 3 which is not <= 2)
//(3,3) => 2,6 => 4 which is not <=2