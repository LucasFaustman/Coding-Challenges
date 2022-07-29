// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

function digits(n) {
    //   a simple return statement. convert n to a string then get length of str
      return n.toString().length
    }
    
    // P: an integer. always will be an integer
    // R: return an integer representing the total number of digits in the param
    // 12345 => 5