// Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

function freqSeq(str, sep) {
    //first create an object to hold frequency
    //then loop through string and add to frequency
    //then split, map through string and replace letter with frequency, then join with sep
    let holdingObj = {}
    
    for (let i = 0; i < str.length; i++) {
      if (holdingObj[str[i]]) {
        holdingObj[str[i]]++
      } else 
        holdingObj[str[i]] = 1
    }
    
    return str.split('').map(letter => holdingObj[letter]).join(sep)
  }
  
  //Will be a string and a character. unclear if always valid. might be symbols, letters, numbers
  //Return a string representing the character of string replaced by the frequency in which it shows up, split by second parameter
  // ('hello world', '-') => '1-1-3-3-2-1-1-2-1-3-1');