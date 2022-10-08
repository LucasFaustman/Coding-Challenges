// Write a function that removes every lone 9 that is inbetween 7s.

function sevenAte9(str) {
  
    //I can do map with a ternary
    
    return str.split('').map((element,index) => str[index-1] === '7' && str[index+1] === '7' && element === '9' ? '' : element).join('')
    
  }
  
  //Will be a string. unclear if always string or valid. should be string integers, but somewhat unclear if always wont be symbol or letter
  //Return a string that removes every lone 9 that is in between 7's
  //E: "79712312" --> "7712312"