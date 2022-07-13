// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
    //   first declare a number
    //   then run a for loop. if counter is divisible by 3 or 5, add to number variable
    //   return number variable
      
      let sum = 0
      
      for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          sum += i
        }
      }
      
      return sum
    }
    
    // P: will be a number. will be an integer. unclear if positive or negative
    // R: a single number repsenting the sum of all multiple of 4 and 5 in the number
    // E: 5 => 3 + 5 = 8