// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    //     I can create a variable that represents n of divisors
      
      let divisorNum = 0
      
    //   create a for loop that checks if num is divisible by n, if so, add to divisor num
      for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
          divisorNum++
        }
      }
    //   return variable
      return divisorNum
    }
    
    // P: is a positive number. always will be a number!
    // R: return number, which represents the number of numbers that factor into n
    // E: 5,  => 2