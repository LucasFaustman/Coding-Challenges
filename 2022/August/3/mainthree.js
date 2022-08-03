// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

function wordsToMarks(string){
    //we can use char codes. charcode -64 to get number of alphabet
    //split, then map to convert each letter to charcode and also to uppercase, then reduce
    return string.split('').map(letter => letter.toUpperCase().charCodeAt(0) - 64).reduce((acc,num) => acc + num,0)
  }
  
  //P: will be a string. always in lower case, will never be empty
  //R: return an integer representing the sum of each letters char code
  // E: 'love' => 54