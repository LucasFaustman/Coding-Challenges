// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

function findNextSquare(sq) {
  
    //   Conditional to see if parameter is a square. If so, return the square of the next number up. If not, return -1
    //   Create a variable that holds the square root of the parameter so that I can return it in the ternary
      let val = Math.sqrt(sq)
      return Math.sqrt(sq) % 1 === 0 ? Math.pow(val+1,2)  : -1
      
    }
    
    // P: Will be a number always. ALways will be not negative. Won't be a string or array of numbers.
    // Return the next square root of the parameter. If not a square root, return -1
    // E: 25 => 36