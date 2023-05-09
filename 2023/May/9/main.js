// 2634. Filter Elements from Array
// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

// Please solve it without the built-in Array.filter method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
 var filter = function(arr, fn) {
    //get res array
    let res = [];

    //for loop

    for (let i= 0; i < arr.length; i++) {
        let num = arr[i];
    //if function returns truthy, push the value to our res array
        if (fn(num, i)) {
            res.push(num)
        }
    }
    return res;
};

//Will be 2 params. One will be an array of integers, other will be a function.

//array of ints will always be valid array of ints. function takes in 2 params, arr[i] and i, and will return a boolean

//Return a new array with elements that are falsy from the function are removed. without the filter method

//Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10