// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    //   I can take the string into an array using split. Then map through all letters and repeat the letter once.
    // then join the array back to a string and return
      
      return str.split('').map(letter => letter.repeat(2)).join('')
    }
    
    // P: Parameter will be just a string of letters. Some uppercase, some lowercase
    // R: Returns a string in which each character is repeated exactly once.
    // E: 'abcd' => 'aabbccdd'