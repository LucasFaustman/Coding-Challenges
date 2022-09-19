// Task
// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

function nthSmallest(arr, pos){
    //First should create a new sorted arr
    let newSortedArr = arr.sort((a,b) => a - b)
    
    //get index of smallest number
    return newSortedArr[pos - 1]
  }
  
  //P: will be an array and an integer. array will be at least size of 3, will have mix of 0
  //s, negative and postivie integers. might be duplicates
  // R: return the pos smallest integer
  // E: [1,2,5,6],3 => 5 because 5 is the 3rd smallest integer