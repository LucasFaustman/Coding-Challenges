// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

// Return the nth triangular number
function triangular( n ) {
    //   if n is below 0, I can add a conditional to return 0
      if (n < 1) {
        return 0
      }
      
    //   first declare a sum variable
    //   let result = 0
      
    //   then a for loop. will go from 1 to number. each time it runs it times the number ahead of it and adds to result
    //   for loop is too slow
    //   for (let i = 1; i <= n; i++) {
    
    //     result += i
    //   }
      
    //   return result - 1
      
    // since equation is so big, I need a simple return statement. loops wont work
    //   I can multiple two operators. one will be m n + 1, the other n / 2
      
      return (n+1) *  (n/2)
      
    }
    
    // P: will be a number. might be negative, might be positive
    // R: return an integer representing the nth triangular number
    // E: 3 => 6