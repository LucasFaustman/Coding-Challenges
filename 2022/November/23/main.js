// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.


function modifyMultiply (str,loc,num) {

    //split string, find element at 2nd param, repeat num number of times, then get rid of last dash
    return (str.split(' ')[loc] + '-').repeat(num).slice(0,-1)
  } 
  
  //Will be 3 params. first will be a string, next two will be nums. always will be valid, no funny business
  //Return a string where the 2nd params index of string will be repeated 3rd param number of times
  //"This is a string",3,5 => "string-string-string-string-string"