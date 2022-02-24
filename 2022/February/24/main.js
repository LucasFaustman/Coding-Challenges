// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

function arithmetic(a, b, operator){
    //your code here!
  //   I can utilize conditionals here to check what operator is being passed in, then return a (operator) b
    
    if (operator === 'add') {
      return a + b
    } else if (operator === 'subtract') {
      return a - b
    } else if (operator === 'multiply') {
      return a * b
    } else if (operator === 'divide') {
      return a / b
    }
  }
  
  // P: a and b will always be a positive integer. a will be first, b second. operator will always be a str
  // R: a result represening the arithmetic!
  // 5,3, multiply => 15