// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    //for loop
    //splice

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i,1)
            i--
        }
    }
};

//Will be an array of nums and a value. array and value will always be valid. always will be array of integers, value will awlays be an integer
//Return an array in place that has all occurences of value removed
//E[2,2,3],2 => [3]
//E[1,2,3,4,5,5,1], 5 => [1,2,3,4,1]