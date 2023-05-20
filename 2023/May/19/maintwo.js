// 347. Top K Frequent Elements


// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    //lets use a hashmap
    let hash = {};

    for (let num of nums) {
        hash[num] = hash[num] + 1 || 1
    }
    //Use object.entries method to make the hash into an array, sort entries based on frequency, slice the array to get only first k elements, then map to only get the key
    return Object.entries(hash).sort((a,b) => b[1] - a[1]).slice(0,k).map(entry => entry[0])
};

//Will be 2 params. One an array of ints, another an int. always will be a valid int array with negative, 0, or pos numbers. k will be at least 1 or more

//Return the k most frequent elements in the array in any order

//E:
//Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]