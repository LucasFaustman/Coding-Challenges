// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

//2 parameters. an array of numbers. array will never be empty and will always contain at least x number of even numbers. always will be an array of numbers, not strings, symbols, etc. other parameter will be a positive integer
//return an array of the last x even numbers inside the original array
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


function evenNums(arr,num) {
    //Use filter method and modulus to get rid of odd numbers
    //use slice to get rid of first numbers we dont need
    //- slice to get last numbers
  
    return arr.filter(element => element % 2 === 0).slice(-num)
  }
  
  console.log(evenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
  console.log(evenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
  console.log(evenNums([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))
  