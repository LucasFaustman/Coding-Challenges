// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
    // I can probably access the Nth number in the array through simple square bracket notation and assign it to a variab;e
  //   then return variable to the power of n 
  //  N might be outside of the array, so I should use a conditional. i can use type of to check
    
    let sum = array[n]
    
    if (typeof array[n] === 'undefined') {
        return -1
    } else 
      return sum**n
  }
  
  // P: One array with only positive numbers, then a number that is non negative. doesn't specify if array will never be empty or number will
  // R: return a singular number representing Nth power in the array
  // [1,2,3,4], 2 => 9