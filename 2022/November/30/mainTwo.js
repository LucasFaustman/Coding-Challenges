// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

function absentVowel(x){
    let newStr = x.toUpperCase()
    //declare arr with each vowels index
  
    let vowelArr = ['A','E','I','O','U']
    
  //then use for loop
    for (let i = 0; i < vowelArr.length; i++) {
      //if our indexof our vowel inside of newSTring is -1
      if (newStr.indexOf(vowelArr[i]) === -1) {
        //return i
        return i
      }
    }
  }
  
  //Will be a string. string of sentences where there will be only one vowel missing. no capitals
  // return integer representing the corresponding missing vowel
  //E: "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"