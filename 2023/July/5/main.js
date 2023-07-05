// 658. Find K Closest Elements
// Medium
// 7.2K
// 580
// Companies
// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b


// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    // let kClosestNumbers = k;
    // let startingPoint;
    // //res array
    // let res = [];
    // //since the array is sorted, i believe we can get the index of x by using indexof x 
    // //if x > 0, starting point if .indexof. else index is 0
    // if (x > 0) {
    //     startingPoint = arr.indexOf(x);
    // } else {
    //     startingPoint = 0
    // }
    

    // //declare a left and right pointer that will both start at startingpoint -1 or +1

    // let left = startingPoint - 1;
    // let right = startingPoint + 1;
    
    // res.push(arr[startingPoint] || 1);
    // kClosestNumbers--

    // //while loop. while our left or right pointer is in play, and our k is > 0
    // while ((left >= 0 || right <= arr.length - 1) && kClosestNumbers > 0) {
    //     //left side first. if we have a valid left, then push to our res array, and decrement k
    //     if (arr[left]) {
    //     res.push(arr[left])
    //     kClosestNumbers--
    //     if (kClosestNumbers === 0) {
    //         break;
    //     }
    //     //same thing on right side
    //     } 
    //     if (arr[right]) {
    //     res.push(arr[right])
    //     kClosestNumbers--
    //     left--
    //     right++
    //     }
    // }
    // //sort the final array
    // return res.sort((a,b) => a-b);

    // Initialize left and right pointers
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  // Loop until the difference between the right and left pointers is greater than or equal to k
  while (rightPointer - leftPointer >= k) {
    // Compare the absolute difference between the value at the left pointer and x
    // with the absolute difference between the value at the right pointer and x.
    // If the former is less than or equal to the latter, move the right pointer one step to the left.
    // Otherwise, move the left pointer one step to the right.
    if (Math.abs(arr[leftPointer] - x) <= Math.abs(arr[rightPointer] - x))
      rightPointer--;
    else
      leftPointer++;
  }

  // Return a subarray containing the k elements from the array between the left and right pointers
  return arr.slice(leftPointer, rightPointer + 1);

};

//Will be 3 params. One iwll be an integer array that is sorted. might be negative, 0, or positive ints

//other 2 params will be integers. unclear if always positive.

//Return the k closest integers to x in the array, sorted in ascending order

//Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]