// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
  
    //Maybe I can create an array of letters? with the characters at the end?
    
    let letterArr = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', '!','?',' ']
    
    //I know I need to map through the array of numbers
    //since they are technically all strings, I should convert them to a number
    //then return element at the index of the number of the element - 1
    return x.map(element => letterArr[Number(element) - 1]).join('')
  
  }
  
  //Will be an array of numbers in string format. might be some special characters such as ! ? or ' '. all inputs valid
  // return a string representing letters that correspond to letters of the alphabet in reverse order. ! is 27, ? is 28, and ' 'is 29
  //numbers are letters of the alphabet in reverse order. a = 26, z = 1, etc
  //['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars'