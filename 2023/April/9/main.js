// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    // let res = [];

    // let val = 1;
    // //quadratic
    // for (let i= 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         //if our index is different, multiply add to our value
    //         if (i !== j) {
    //             val *= nums[j]
    //         }
    //     }
    //     //push our val to res arr, then reassign val to 1
    //     res.push(val)
    //     val = 1;
    // }
    // return res

    let result = new Array(nums.length).fill(1)


     // Calculate the product of elements before the current index
  let productBefore = 1;
  for (let i= 0; i < nums.length; i++) {
      result[i] *= productBefore;
        productBefore *= nums[i];
  }

  //console.log(result)

  // Calculate the product of elements after the current index
  let productAfter = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= productAfter;
    productAfter *= nums[i];
  }

  return result;

};


//Will be an array of nums. always will be an array of nums, never invalid!

//return a new array answer sucht hat answer[i] is equal to the product of all elements of nums except nums[i]

//E: Input: nums = [1,2,3,4]
// Output: [24,12,8,6]