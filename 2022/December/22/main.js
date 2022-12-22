// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
    //quadratic first
    // let count = 0
   

    // // nested for loop

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (i < j && Math.abs(nums[i] - nums[j]) == k) {
    //             count++
    //         }
    //     }
    // }
    // return count


    // hashmap solution
    // count and obj
    let count = 0
    let hash = {}
    //loop through nums and add to hash occurences of each letter

    for (let i= 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] + 1 || 1
    }
    //loop again. if we find a number matching num - k, then add the occurences to our count

    for (let i =0; i < nums.length; i++) {
        let num = nums[i]
        if (hash[num - k]) {
            count += hash[num - k]
        } 
    }
    return count
    
};

//2 parameters here. One will be an integer array. no funny business, will always be a positive integer array. second parameter will always be a positive integer

//Return a number representing the number of pairs(i,j) where i < j such that nums[i] - nums[j] == key
//[1,2,2,1], k = 1 => 4
//4 because we have 1,2 1,2 2,1 2,1