// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .

function maxMultiple(divisor, bound){
    // declare a variable that gets the remainder when you divide bound by divisor
    
    let div =  bound % divisor 
    
  //   subtract the variable from bound
    
    return bound - div
  }
  
  // P: will be two integers. integers will only be positive values
  // R a single number representing the max value of the divisor, while being less than or equal to bound
  // E: 2,7 => 6