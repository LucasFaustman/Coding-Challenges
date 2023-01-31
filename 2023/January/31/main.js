// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y){

    //     //for loop going from x, all the way to 0
      
    //   for (let i= x;i >= 0; i--) {
    //     if (x % i === 0 && y % i === 0) {
    //       return i
    //     }
    //   }
      
      
      //recursive method
      
      return y === 0 ? x : mygcd(y, x%y)
    }
    
    // P 2 integers. both will always be greater or equal to 1
    // R: return an integer representing the greatest common divisor
    // E: 30,12. => 6