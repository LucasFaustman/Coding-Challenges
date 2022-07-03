// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
    //   I can utilize a map method. inside the method, I can use a ternary and if num has an integer square root, then square root it
    //   if not, then square number and return the array
      
      return array.map(element => Math.sqrt(element) % 1 === 0 ? Math.sqrt(element) : element**2) 
    }
    
    // P: is an array of integers. integers will always be positive. never empty or null
    // R: return an array of integers. if integer is a has a square root, then square root it. if not, square the num
    // [2,4,6,9] => [4,2,36,3]