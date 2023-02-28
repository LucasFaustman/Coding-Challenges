// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    //I believe I can use a hash here

    let hash = {};

    for (let char of arr) {
        hash[char] = hash[char] + 1 || 1;
    }

    //if there are fewer than k distinc strings, return empty string
    if (Object.values(hash).filter(val => val === 1).length < k) {
        return ""
    }

    //if all values in hash are distinct, return kth one
    let firstHashVal = Object.values(hash)[0]
    if (Object.values(hash).every(num => num === firstHashVal)) {
        return Object.entries(hash)[k-1][0] 
    }
    //if we pass all the above, filter entries where val is 1, then get the kth element and return the key

    return Object.entries(hash).filter(entry => entry[1] === 1)[k-1][0]
};

//Will be an array of strings.  array will always be valid and always have a valid length. strings will only consist of lowercase english letters. 2nd param will be an integer between 1 and 5

//Return a string representing the kth distinct string present in arry. if no fewer than k distinct strings, return empty string. if all strings in arr are distinct, return 1st string

//Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned. 