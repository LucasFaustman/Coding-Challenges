// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
    //I can probably do a simple filter method.length
  // since i cant use regex, I can grab the char codes of each element to see if its a 
// lower case num
  //then get length at end
  
  return str.split('').filter(element => (64+32) < element.charCodeAt(0) 
  && element.charCodeAt(0) < (91+32)).length
}

// P: will be a string. might be an empty string
// R: return an integer representing the number of lower case letters inside the string
// E: 'string' => 6