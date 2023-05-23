// 167. Two Sum II - Input Array Is Sorted

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Constraints:

// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {

    //solve this using a hash in linear time
    // let hash = {}

    // for (let i= 0; i < numbers.length; i++) {
    //     let n = numbers[i]
    //     if (hash[target - n] >= 0) {
    //         return [hash[target-n] , i + 1]
    //     }

    //     hash[n] = i + 1
    // }

    //More optimized 2 pointer approach

      let [left, right] = [0, numbers.length - 1];
    
    // The code uses a two-pointer approach, with `left` and `right` pointers initially pointing to the start and end of the array.

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        // Calculate the sum of the current pair of numbers pointed to by `left` and `right`.

        const isTarget = sum === target;
        if (isTarget) return [left + 1, right + 1];

        // If the sum equals the target value, return the indices (1-based) of the numbers as the result.

        const isTargetGreater = sum < target;
        if (isTargetGreater) left++;

        // If the sum is less than the target, increment the `left` pointer to consider a larger number.

        const isTargetLess = target < sum;
        if (isTargetLess) right--;

        // If the sum is greater than the target, decrement the `right` pointer to consider a smaller number.

        // The while loop continues until the `left` and `right` pointers meet or cross each other.
    }

    // If no two numbers are found that sum up to the target, return [-1, -1] as the result.
    return [-1, -1];
};

//Will be 2 params. One will be an array of nums ordered in non decreasing order. the other param will be a positive integer. both params always valid

// Return the indices of the two numbers(which add to equal our target), index1 and index2, added by one as an integer array [index1, index2] of length 2.

//Your solution must use only constant extra space.


//E 

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
