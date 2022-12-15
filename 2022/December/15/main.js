// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    // //quadratic here
    // let count = 0
    // for (let i =0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (nums[i] === nums[j] && i < j) {
    //             count++
    //         }
    //     }
    // }
    // return count


    let hash = {}
    let count = 0
    for (let i =0; i < nums.length;i++) {
        if (hash[nums[i]]) {
            count += hash[nums[i]]
            hash[nums[i]] += 1
        } else {
            hash[nums[i]] = 1
        }
    }
return count

};


//Will be an array of integers. always will be a positive integer. always valid input, no funny business
//Return the number of good pairs in the array. a good pair is good if nums[i] === nums[j] and i < j
//[1,2,3,1,1,3] => 4, because there are 4 good pairs, 0,3, 0,4, 3,4, and 2,5