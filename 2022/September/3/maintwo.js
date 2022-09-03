// Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If one of the condition above is true and the integer is even, add "Script" to the end of the string.

// If none of the condition is true, return the string "mocha_missing!"

function caffeineBuzz(n){
  
    //create variable name newStr
    let newStr = ''
    //conditionals. start from bottom
    
    if (n % 3 === 0 && n % 4 === 0) {
      newStr += 'Coffee'
    } else if (n % 3 === 0) {
      newStr += 'Java'
    } else 
      newStr+= 'mocha_missing!'
    
    
    
    
    //then lastly, if string is divisible by both 3 and 3, or 4 and 2, and doesnt equal mocha missing, add Script to the end
    if ((n % 3 === 0 && n % 2 === 0 || n % 4 === 0 && n % 2 === 0) && newStr !== 'mocha_missing!' ) {
      newStr += 'Script'
    }
    
    //return newstr
    
    return newStr
    
  }
  
  //P: will be a non zero integer and im assuming non negative
  // R: return a string dependant on divisibility of the parameter. strings are included in problem
  // E: 1 => mocha_missing!