// Given an array of integers , Find the Nth smallest element in this array of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

//2 paramters. one will be an array. will always be an array and size of at least 3. numbers can be positive, negative, or 0. might be duplicates. will always be numbers inside array, no funny business. other parameter will always be positive integer
//Return an integer representing the nth smallest element in the array of integers.
//[3,1,2], 2 => 2
//[15,20,7,10,4,3] ,3 => 7

function nthSmallest(arr, num) {
    //first filter out duplicates, then sort the array
    //then we can grab the nth smallest element
  
    return [...new Set(arr)].sort((a,b) => a-b)[num - 1]
  }
  