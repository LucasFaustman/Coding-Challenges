// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    // I first looked up how to convert a number to binary
  //   I can create an array of the binary. Then iterate through the array using reduce to add up all the ones
    
    const binaryCalculation =  n.toString(2).split('')
    
     return binaryCalculation.map(Number).reduce((acc,num) => acc + (num === 1),0)
    
  
    
  };
  
  
  // P: Will be a number. Never be negative, always a whole number
  // R: Return a number representing the number of bits that are equal to one in the binary representation of number
  // E; 1234 => 5