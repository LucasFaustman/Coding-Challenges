// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 
// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0

function derive(coefficient,exponent) {
  
    //first declare a variable representing numbers multipled
    let firstResult = coefficient * exponent
    
    //return string with template literal
    
    return `${firstResult}x^${exponent - 1}`
    
  }
  
  //P: two integers. never will be 0 or negative and exponent will never be 1
  // R: return a string representing the multiplication of both numbers, then x, then ^, then exponent -1
  // E: 4,5 => '20x^4'