// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

function oddCount(n){
    // your code here
  //   I can probably just make a simple for loop with a conditiona, checking if i is odd, then adding it to a result variable
  //   let result = 0
  //   if (n > 0) {
  //     for (let i = 0; i < n; i++) {
  //       if (i % 2 !== 0 && i > 0) {
  //       result++
  //       }
  //     }
  //   }
  //   return result
    
  //   the for loop won't respond in time. I need to simplify my code. Since there's an even amount of even and odd numbers, I can
  // mayve divide by two and wrap in math.floor
    
    return Math.floor(n/2)
  }
  
  // P: N will always be positive integer
  // R: Return number of positive odd numbers leading up to the positive parameter
  // E: 15 -> 7. 1,3,5,7,9,11,13