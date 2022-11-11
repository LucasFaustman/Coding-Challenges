/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    //for loop
    //then if our current iteration is equal to the next, splice it out and reduce iteration
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i,1)
            i--
        }
    }
};

//Will be an array of numbers. array will be sorted in ascending order. always will be an integer. no funny business
//Return an array with duplicated out in same order. has to be in place!
//E: [1,1,2] => [1,2]
//E [1,1,2,3,4,4,5] => [1,2,3,4,5]