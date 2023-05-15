// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
 var numOfSubarrays = function(arr, k, threshold) {
    //sum,windowstart, and number of sub array count variables
    let sum = 0;
    let windowStart = 0;
    let numOfSubArrs = 0;

    //for loop

    for (let i= 0; i < arr.length; i++) {
        sum += arr[i]
        if (k - 1 === i - windowStart) { //check if in window 
            let average = sum/k //get avg
            if (average >= threshold) { //if average is >= thresh, then add one
                numOfSubArrs++
            }
            sum -= arr[windowStart] //move our window one to the right
            windowStart++
        }
    }
    return numOfSubArrs
};


//3 params. Integer array, will always be an array of positive integers.  

//also 2 integers as params. always will be positive or 0 ints

//Return the number of sub arrays of size k and average greater than or equal to threshold

//Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).