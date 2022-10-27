// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


//Will be a string. might be any type of character, could be a letter, numbers, symbol, etc. might be duplicates. upper or lower case
//Return a new string where if a character appears once, '(', if appears more than once. ')'. upper and lowercase does not matter
//'din' => '((('
//'recede' => '()()()'

function convertToParam(string) {
    //split, then map with a cb function. cb function can have a ternary.
    //we need to lowercase the string first!
    //join at end
  
    return string.toLowerCase().split('').map(element => string.indexOf(element) === string.lastIndexOf(element) ? '(' : ')').join('')
  }
  
  console.log(convertToParam('din'))
  console.log(convertToParam('recede'))
  console.log(convertToParam('Success'))
  console.log(convertToParam('(( @'))