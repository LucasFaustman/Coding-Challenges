// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

function solve(s) {
    //first need to split the equation somehow
    let splittedStr =  s.split('a').join('.').split('e').join('.').split('i').join('.').split('o').join('.').split('u').join('.').split('.')
    // we need to convert letters into numbers
    //add the numbers of each substring
    //then do some sort of method that checks with number is highest and return that number
    return splittedStr.map(element => element.split('').map(element => element.toUpperCase().charCodeAt(0) - 64)
                          .reduce((acc,num) => acc + num,0)).reduce((acc,num) => num > acc ? acc = num: acc,0)
    
    
    
  };
  //P: will be a lowercase string. seems like its always a string but unclear
  // R: return a number representing the highest value of consonant substrings. consanants are letters of alphabet that arent vowels
  // E: ['zodiac'] => 'z','d','c' => 26 because z is the highest substr
  //'strength' => 'str'ngth' => str wins because 57 > 49