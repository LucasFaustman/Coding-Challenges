// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
    // for loop
    
    //first create a variable holding a number
    let numSum = 0
    //then for loop. starts at 0, ends at length
    for (let i = 0; i < array.length; i++) {
      //since there might be negative numbers beside eachother, I have to get rid of the 0 declared in the numsum variable
      // so the highest negative number can be held. first assign the variable of numsum to the first 2 multipliers of array
      if (i === 0) {
        numSum = array[i] * array[i+1]
      }
      //each time iterates, I want to multiply array[i] * array[i+1]. if bigger than numSum, equal to numSum
      
      else if (array[i] * array[i+1] > numSum) {
        numSum = array[i] * array[i+1]
      }
    }
    
    //return numsum
    
    return numSum
  }
  
  // P will be an array of integers. array will have a size of at least 2.
  // R: will be an integer representing the highest max product from 2 adjacent(next to) numbers in the array
  // E [5,8,3] => 5*8 = 40