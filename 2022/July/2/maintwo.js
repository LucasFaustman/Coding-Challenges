// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Return an array
function fizzbuzz(n)
{
//   I should first create a new array 
  let newArr = []
//   then create a for loop. starts at 1, goes up to n, goes up by 1 each time. start with if divisble by 3 and 5 first,
// then 5, then 3, then at the end at an else that pushes the num to newarr
  
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        newArr.push('FizzBuzz')
    } else if (i % 5 === 0) {
        newArr.push('Buzz')
    } else if (i % 3 === 0) {
        newArr.push('Fizz')
    } else
      newArr.push(i)
  }
//   then return the array
  return newArr

}

// P will be a whole number. never less than 1.
// R: return an array containing the n from 1 to n. replace n with fizz if divisible by 3, buzz if divisible by 5, and
// fizzbuzz if divisible by 3 and 5
// E: 5 => [1,2,Fizz,4,Buzz]