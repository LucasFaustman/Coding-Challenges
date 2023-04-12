// 1539. Kth Missing Positive Number
// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

// Constraints:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000
// 1 <= k <= 1000
// arr[i] < arr[j] for 1 <= i < j <= arr.length


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
     //declare a starting val and index
    let num = 1;
    let index = 0;
    //decrement down
    //while k > 0
    while (k > 0) {
        //if we have a match, skip the number. if no match, the decrement k
      arr[index] === num ? index++ : k--;
      num++;
    }
    //subtract one to get the actual result
    return num - 1;
  }
  
  //Will be 2 params. One will be an array of positive integers sorted in ascending order. second will be an integer k, always will be a positive int
  
  //Return the kth positive integer that is missing from the array
  
  //Input: arr = [2,3,4,7,11], k = 5
  // Output: 9
  // Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.