// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.

function factorial(n)
{
//   first create a conditional to see if function is 0, return 1
  if (n === 0) {
    return 1
    //then a conditional if n is greator than 12 or less than 0
  } else if (n > 12 || n < 0) {
    throw new RangeError("The argument must be between 0 and 12.")
  }
//   create a variable that will hold the sum of multiplication of a for loop
  let factorial = 1
//   then create a for loop to spit out numbers back to multiple into factorial
  for (let i = 1; i <= n; i++) {
    factorial *= i
  }
  
//   then return factorial
  
  return factorial
}

// P: going to a number, non negative. Sometimes will be below 0 or 12, which case we throw an exception
// R: the factorial of the n given
// E: 5 => 1 * 2 * 3 * 4 * 5 = 120