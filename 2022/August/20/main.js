// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

function halvingSum(n) {
  
    //first create a sum variable
    let sum = 0
    
    //then for loop. starts at 0, ends at n
    
    for (let i = 0; i <= n; i++) {
      //each time it loops, I want to add n/2**i
      
      sum += Math.floor(n/2**i)
   
      
    }
    
    //return sum
    return sum
      
  }
  
  //P: will be an integer. unclear if always will be an integer or if positive or negative
  // R: return a sum of the results of integer division.
  // E: 25 => 25 + 12 + 6 + 3 + 1