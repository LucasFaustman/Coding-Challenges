// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){
    //   I can probably just do a simple filter function, with a modulus conditional inside
      
      return numbers.filter(num => num % divisor === 0)
    
    }
    
    // P: An array of numbers, always will be an array. Might be negative or positive
    // R: Return an array of nums that represent nums that are divisible by the divisor
    // E: [1,2,3,4,5],2 => 2,4