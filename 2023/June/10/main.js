// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.


function betweenExtremes(numbers) {
    //just do a simple math.max - math.min
    //have to use spread operators since math.max and min experience numbers split by commas, not an array
    return Math.max(...numbers) - Math.min(...numbers)
 }


 //Will be an array of numbers. might be positive, negative, but always an integer. always an array. always will be at least 2 integers

 //Return the difference between the largest and smallest values

 //E
 //// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).