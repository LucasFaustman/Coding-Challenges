// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    //    first declare the count
    //   while our multipled numberes.length > 1, continue to multiply
    //   count++
    //   then return the count
      
      let count = 0
    
    //   if num.length === 1, then return count
    // while length of num is greater than 1, count++ and make num multiplied by its numbs using reduce
      while (num.toString().split('').join('').length > 1)  {
        count++
        num = num.toString().split('').map(Number).reduce((acc,number) => acc * number,1)
         
        }
    //   return count
      return count
      }
    
    
     
    
    // P: will be a positive integer. always will be an integer and positive
    // R: return a one digit number representing the multiplicative persistence needed to get to a single digit
    // E: => 39 => 3 because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4