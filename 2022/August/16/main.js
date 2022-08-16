// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

function sumMul(n,m){
  
    //if either number is below 1, return invalid
    
    if (n < 1 || m < 1) {
      return 'INVALID'
    }
    
    
    
  //we can first declare a variable to hold our sum
    
    let sum = 0
    
    //then a for loop, from n to less than m
    
    for (let i = n; i < m; i++) {
  
      //if i % n === 0, add to sum
      
      if (i % n === 0) {
        sum += i
      }
    }
    
    //return sum
    
    return sum
  }
  
  // P: will be two integers. might be negative or 0
  // R: return a number representing the sum of multiples from n to below m
  // E: (2,9) => 2 + 4 + 6 + 8 = 20