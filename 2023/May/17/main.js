// 1089. Duplicate Zeros
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    //for loop
    for (let i= 0; i < arr.length; i++) {
        //if num is 0
        if (arr[i] === 0) {
            //splice the arr, adding 0 to the next element
            arr.splice(i,0, 0)
            //pop the last from the array, and iterate by 1 over the 0
            arr.pop()
            i++
        }
    }
    return arr;
};

//Will be an integer array. will always be a valid int array, ints will be between 0 and pos numbers

//Return an array duplicating each occurence of 0, shifting remaining elements to the right. elements beyond the length of the original array are not written

//Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]