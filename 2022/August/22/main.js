// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
    // first filter odd numbers out of array, then slice using number
    return array.filter(element => element % 2 === 0).slice(-number)
  }
  
  //P: will be 2 params. one will be an array of integers. array will always contain at least n number of even numbers. next will be a
  // integer. unclear if always will be positive
  // R: return an array containing the last number of even numbers in the original array, in a new array
  // E: [1,2,3,4,5,6,7],2 -> [4,6]