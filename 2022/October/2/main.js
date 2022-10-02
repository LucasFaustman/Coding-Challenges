// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

function calculate(str) {
  
    //I can split at plus, then join with +, then do the same thing to minus
    //use eval() to evaluate the expression from string to actual expression
    //then convert back to string at the end
    return eval(str.split('plus').join('+').split('minus').join('-')).toString()
  
  }
  
  
  
  //Will be a string. string will be with numbers and words. string will never be empty and likely always valid
  //Return a string representing the number of basic math inside the string
  //"1plus2plus3plus4"), '10' , because 1 plus 2 plus 3 plus 4is 10