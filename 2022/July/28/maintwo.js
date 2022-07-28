// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y){
    // declare a variable containing highest divisor
    let highestDivisor = 0
  //   create a for loop. goes from 1 to x. if x % i === 0 %% y % i === 0, declare that as highest divisor
  
      for (let i = 1; i <= x; i++) {
        if (x % i === 0 && y % i === 0) {
          highestDivisor = i
        }
      }
    
    //   return
    return highestDivisor
  }
  
  // P 2 integers. both will always be greater or equal to 1
  // R: return an integer representing the greatest common divisor
  // E: 30,12. => 6