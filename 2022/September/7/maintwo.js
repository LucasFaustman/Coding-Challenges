// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

function absentVowel(x){
  
    //5 conditionals. check if specific vowel is not included. if not included, return number associated with index
    
    if (!x.toLowerCase().includes('a')) {
      return 0
    } else if (!x.toLowerCase().includes('e')) {
      return 1
    } else if (!x.toLowerCase().includes('i')) {
      return 2
    } else if (!x.toLowerCase().includes('o')) {
      return 3
    } else if (!x.toLowerCase().includes('u')) {
      return 4
    }
  
  }
  
  //P: will be a string. always will be a string
  // R: return a number representing the vowel missing from the string. numbers indicated in problem
  // E: 'Hell, my name is Lucas'=> 3 because o is missing