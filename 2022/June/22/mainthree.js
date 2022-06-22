// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    // I can use map to return a new string and change each letter of the string
//   first need to convert to an array, use map method, then add them togetehr using join
  
  return word.toLowerCase().split('').map((element,index,array) => 
array.indexOf(element) === array.lastIndexOf(element) ? '(' : ')').join('')
}

// P: will be a string, always a string
// R: Return a new string representing if a character shows up more then once, use ), otherwise use (
// E: 'din' => ((( -> 'dinn' => (())