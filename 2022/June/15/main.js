// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
    // I can probably use filter here to get rid of all the odd numbers
    return values.filter(element => element % 2 === 0)
  }
  
  // P: will be an array of values. Will always be integers.
  // Return an array of even integers
  // [1,2] => [2]