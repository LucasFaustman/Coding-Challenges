// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m){
    //   i can use a simple return mod statement
    //   not sure if n or m will be bigger, so a ternary is necessary
      return n > m ? n % m : m % n
    }
    
    // P: 2 integers. might be 0
    // R: return an integer representing the remainder of dividing the largest value by the smallest
    // E: 17,5 -> 2