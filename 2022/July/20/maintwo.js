// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

function isPowerOfTwo(n){
    //   SHould be a simple return statement here, I just need to find it
    //   should add a conditional for 0 and 1
      if (n === 0) {
        return false
      }
      return (n & (n-1)) == 0
    }
    
    // P: will be a non negative integer
    // R: return a boolean representing if n is a power of two
    // E: 1024 => true