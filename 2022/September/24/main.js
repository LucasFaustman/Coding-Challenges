// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
    //I need to split then map through each letter of array
    return string.split('').map(letter => letter === 'a' ? 1 : letter === 'e' ? 2 : letter === 'i' ? 3 : letter === 'o' ? 4 : letter === 'u' ? 5 : letter).join('')
  }
  
  function decode(string) {
    //split then map again with reversed ternary
    return string.split('').map(char => char == 1 ? 'a' : char == 2 ? 'e' : char == 3 ? 'i' : char == 4 ? 'o' : char == 5 ? 'u' : char).join('')
  }
  
  // Both functions will take in a string. string might be numbers or letters. only lowercase
  //Return a new string. encode return string that is encoded using params in problem.
  //decode is the opposite
  // 'hello' => 'h2ll4'