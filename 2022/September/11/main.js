// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

function first(arr, n) {
    //if n is 0, return []
    if (n === 0) {
      return []
    }
    
    //use .slice(n) with ternary
    return n > 1 ? arr.slice(0,n) : arr.slice(0,1)
  }
  
  //P: Will be an array of letters up to e and a number. number will be default to 1. might be 0
  // R: Return an array of the first n elements of the array
  //E: first(arr, 2) //=> ['a', 'b']