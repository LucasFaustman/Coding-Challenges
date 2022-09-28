// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.



function reverse(str){

  
  
    //split, then map. if element % 2 !== 0, element.split.reverse.join. then join at end
    
    //for this to work, i need to grab the index of the element. first split and assign to new arr
    //to get rid of trailing whitespace i can use .trim before splitting
    let strToArr = str.trim().split(' ')
    
    //then return using map then join
    return strToArr.map(element => strToArr.indexOf(element) % 2 !== 0 ? element.split('').reverse().join('') : element).join(' ')
    
    
  }
  
  //Will be a string. seems like it will always be a string. string might have letters or symbols
  //Return a string where every other word is reversed
  //"Reverse this string, please!" =?  "Reverse siht string, !esaelp"