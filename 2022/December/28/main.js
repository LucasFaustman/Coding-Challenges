// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

 

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    //hash table
    let hash = {}
    for (let i= 0; i < arr.length; i++) {
        hash[arr[i]] = hash[arr[i]] + 1 || 1
    }
    //then get an array of occurences using object.values, compare length to new Set, which removes duplicates
    return Object.values(hash).length === new Set(Object.values(hash)).size
};

//Will be an array of integers. always will be valid, no funny business.
//Return a boolean representing true if each value in the array occures a unique number of times, false otherwise
//[1,2,3] => false because number of occurences isn't unique
//[1,2,3,2,3,1,1,2,2,2,2] => true