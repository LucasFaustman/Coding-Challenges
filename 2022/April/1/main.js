// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  
    //   declare a sum variable
      let sum = 0
    //   start a for loop which goes from 0 to under the number. 
    //   set up conditional to see if number is multiple of 3 or 5, then add to sum
      
      for (let i =1; i < number; i++) {
        if (i % 5 === 0 || i % 3 === 0){
          sum += i
        }
      }
      return sum
    }
    
    // PREP
    // P: inpout is a number that can be positive OR negative. whole number. 
    // R: Retuns a SUM(number) of all multiples of 3 or 5 up until below the number given.
    // E: console.log(solution(10)) => 3,5,6,9 = 23! returning 23
    