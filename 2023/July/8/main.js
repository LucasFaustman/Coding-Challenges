// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

function validParentheses(parenStr) {
    // I can use a stack here to track the paranthesis
    
    let stack = [];
    
    for (let i= 0; i < parenStr.length; i++) {
      //if our last parenthesis in our stack is an open paran, and our curr is a closed, then pop from array
      
      if (stack[stack.length - 1] === '(' && parenStr[i] === ')') {
        stack.pop();
      } else { //else add to our stack
        stack.push(parenStr[i])
      }
    }
    //return if stack has no length
    return !stack.length
  }
  
  //Will be a string representing a paranthesis. strings will always be valid, only will contain
  //( or ). might be empty though
  
  //Return true if the paranthesis is valid, false otherwise
  
  //"()"              =>  true
  // ")(()))"          =>  false
  // "("               =>  false
  // "(())((()())())"  =>  true