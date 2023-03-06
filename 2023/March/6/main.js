// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.



/**
 * @param {number[]} nums
 * @return {number}
 */

 var pivotIndex = function(nums) {

    //quadratic solution
    
        // //for loop
        // //inside the for loop, I'm thinking we can reduce
    
        // for (let i= 0; i < nums.length; i++) {
        //     //if nums.slice(0,i).reduce... === nums.slice(i+1).reduce... return i
        //     if (nums.slice(0,i).reduce((acc,num) => acc + num,0) === nums.slice(i+1).reduce((acc,num) => acc + num,0)) {
        //         return i
        //     }
        // }
    
        // return -1;
    
        //o(n) solution
    
        let leftSum = 0,
            rightSum = 0;
        //for each num, add to rightsum
            nums.forEach(num => rightSum += num);
    
            for (let i = 0; i < nums.length; i++) {
                //minus current num from rightsum
                rightSum -= nums[i];
        //if our left sum, is equal to our freshly subtracted right sum, return index
                if (rightSum === leftSum) {
                    return i;
                }
    
            //if no match found, add to leftSum
                leftSum += nums[i];
            }
        return -1;
    };
    
    //Will be an array of integers. Array will always be a valid array. each integer will either be positive, negative, or 0. always a valid integer
    
    //Return an integer representing the leftmost pivot index. if no valid index exists, return -1
    
    //pivot index is the point in array where sum of all numbers strictly to the left of the index is equal to sum of all numbs strictly to the indexes right
    
    //Input: nums = [1,7,3,6,5,6]
    // Output: 3
    // Explanation:
    // The pivot index is 3.
    // Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
    // Right sum = nums[4] + nums[5] = 5 + 6 = 11