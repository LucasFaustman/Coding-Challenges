
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    //   I can utilize a for loop here. I can nest another loop inside the original loop 
    // that will check to see if element equals another element
      let checkNum = 0
      for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
          if (A[j] === A[i])
            checkNum++
        }
        
        if (checkNum % 2 !== 0) {
          return A[i]
        }
        }
      
    }
    // P: Will always be an array with at least one integer
    // return the integer that appears an odd number of times.
    // E: [1,2,2] => 1