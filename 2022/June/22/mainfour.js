// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function duplicateEncode(word){
    // I can use map to return a new string and change each letter of the string
//   first need to convert to an array, use map method, then add them togetehr using join
  
  return word.toLowerCase().split('').map((element,index,array) => 
array.indexOf(element) === array.lastIndexOf(element) ? '(' : ')').join('')
}

// P: will be a string, always a string
// R: Return a new string representing if a character shows up more then once, use ), otherwise use (
// E: 'din' => ((( -> 'dinn' => (())