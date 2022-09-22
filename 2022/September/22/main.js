// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

function maxProduct(numbers, size){
    //First sort the array and assign it to a variable
    
    let newSortedNums = numbers.sort((a,b) => b - a)
    
    //then slice at size index then reduce
    
    return newSortedNums.slice(0,size).reduce((acc,num) => acc * num,1)
  }
  
  //P: will be an array and an integer. array will always be size 3 and repitiion can occur. will be mixture of pos and negatives
  // R: return an integer representing the product of the first size nums in the array
  // E: [4,3,5], 2 => 20 because 4*5 = 20