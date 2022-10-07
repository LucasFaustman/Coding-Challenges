// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

function vowelOne(s){
  
    //create array of vowels
    let arrOfVowels = ['a','e','i','o','u']
    // split, map, then join
    return s.toLowerCase().split('').map(element => arrOfVowels.includes(element) ? '1' : '0').join('')
  }
  
  //Will be a string of letters or numbers or symbols. might be alphabetical or not
  //Return a new string where each vowel is replaced by a 1 and non vowels replaced by 0
  //( "abceios" ) -> "1001110"