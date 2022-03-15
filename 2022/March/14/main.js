// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
    //   I can first declare a variable to hold my arr
      let newArr = [];
    //   I can then make a for loop that pushes if i is divisor of integer
      for (let i = 2; i < integer; i++) {
    //     then I can make a conditional to check if divisor or not
        if (integer % i === 0) {
         newArr.push(i)
        } 
        
      }
    //   finally I can see if number is prime by seeing if newarrlength is greater than 1
      return newArr.length > 1 ? newArr : `${integer} is prime`
      
    };
    // P: Parameter will always be an integer greater than 1
    // R: Return an array of all integers divisors(besides 1 and itself)
    // from smallest to largest
    // If number is prime return string __ is prime
    // E: 15 => [3,5]