// 2592. Maximize Greatness of an Array
// Medium
// 326
// 9
// Companies
// You are given a 0-indexed integer array nums. You are allowed to permute nums into a new array perm of your choosing.

// We define the greatness of nums be the number of indices 0 <= i < nums.length for which perm[i] > nums[i].

// Return the maximum possible greatness you can achieve after permuting nums.

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximizeGreatness = function(nums) {
    // let perms = [...nums.sort((a,b) => a- b) ]
    // //create new res count to return
    // let count = 0;

    // //for loop
    // for (let i = 0; i < nums.length; i++) {
    //     //get an index to track index in perms
    //     let index = 1; 
    //     //while loop. while our perms[index] <= nums[i], keep adding to index
    //     while(perms[index] <= nums[i] && index < perms.length) {
    //         index++
    //     }
    //     //if our permsindex > nums[i], count++ and get rid of the number inside of perms
    //     if (perms[index] > nums[i]) {
    //         count++
    //         perms.splice(index,1)
    //     }
        
    // }


    // return count;  

    nums.sort((a,b) => a - b)
    let res = 0;
    let j = 1;
    for(let i = 0; i < nums.length; i++){
        while(j < nums.length && nums[j] <= nums[i]){
            j++;
        }
        if(j < nums.length && nums[j] > nums[i]){
            j++;
            res++;
        }
    }
    
    return res

};


//Will be an array of nums. will always have a valid length. always will be between 0 and infinity positive number

//Return the max possible greatness we can achieve after permuting nums

//we define greatnesss as the number of indices for which perm[i] > nums[i]

// Example:

// Input: nums = [1,3,5,2,1,3,1]
// Output: 4
// Explanation: One of the optimal rearrangements is perm = [2,5,1,3,3,1,1].
// At indices = 0, 1, 3, and 4, perm[i] > nums[i]. Hence, we return 4.