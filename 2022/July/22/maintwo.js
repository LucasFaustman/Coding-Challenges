// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

var palindromeChainLength = function(n) {
    //   I can probably use recursion for this?
    //   first split n into string
    //   then see if string is equal forwards and backwards
    //   if not, add 1 to step and recurse 
      
      let step = 0
      
      if (n.toString() ===  n.toString().split('').reverse().join('')) {
              return step
            } else
              step+=1
              return addNumbers(n)
    //   in order to keep track of step, I need to define a function inside of my function which adds the numbers togther
      function addNumbers(num) {
          
    //       declare a new variable which represents the numbers added together
          let newNum = (num + Number(num.toString().split('').reverse().join(''))) //=> 165
    //       if numbers added together are equal when reversed, return step
          if (newNum.toString() ===  newNum.toString().split('').reverse().join('')) {
               return step
    //         if not equal, run addnumbers again and add one to step
            } else
              step++
              return addNumbers(newNum)
              
    
        }
    // return step
    return step
      
    };
    
    // P Will be a positive integer always
    // R: return a number representing the number of special steps needed to obtain palindrome
    // // E:87 +   78 =  165     - step 1, not a palindrome
    //  165 +  561 =  726     - step 2, not a palindrome
    //  726 +  627 = 1353     - step 3, not a palindrome
    // 1353 + 3531 = 4884     - step 4, palindrome!