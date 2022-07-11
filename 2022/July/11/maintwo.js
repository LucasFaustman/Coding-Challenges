// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a,b) {
    // variable equal to sum of a+b
      let sum = a + b
    //   .toString(2) to go to binary
      return sum.toString(2)
    }
    
    // P: 2 integers. will always be integers, maybe negative
    // R: return a string representing the binary number of the sum
    // E: 1,1 => '10' 