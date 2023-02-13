/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
 var findFinalValue = function(nums, original) {
    // //classic for loop probably works here
    // //we need to firt sort the array
    // nums = nums.sort((a,b) => a - b)

    // for (let num of nums) {
    //     if (num === original) {
    //         original = original * 2
    //     }
    // }
    // return original


//while loop

    // while (nums.includes(original)) {
    //     original = original * 2
    // }
    // return original

    //recursion

    const index = nums.indexOf(original)
    
    if(index === -1 ) {
        return original;
    } else {
       original = 2 * original
       return findFinalValue(nums, original)
   
    }
};

//2 params. One will be an array of numbers. numbers will always be positive integers, always a valid array. 2nd param will be an integer that is positive

//Return the final value of original. if we find original in nums, multiply original by two. keep going until the end of the array

//E:Input: nums = [5,3,6,1,12], original = 3
// Output: 24
// Explanation: 
// - 3 is found in nums. 3 is multiplied by 2 to obtain 6.
// - 6 is found in nums. 6 is multiplied by 2 to obtain 12.
// - 12 is found in nums. 12 is multiplied by 2 to obtain 24.
// - 24 is not found in nums. Thus, 24 is returned.