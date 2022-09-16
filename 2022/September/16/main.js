// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

function lastSurvivor(letters, coords) {

    //need to do a for loop
      //split letters string
      let newLetters = letters.split('')
      
      for (let i = 0; i < coords.length;i++) {
        //each time loop runs, splice at coords[i] one
        newLetters.splice(coords[i],1)
      }
      //then return join
      return newLetters.join('')
      
    
    }
    
    //P: 2 params. one will be a string of letters. other will be array of numbs. string never empty, length of arr
    // one less than length of string. all nums valid, possible duplicate numbs
    // R: return a string representing the last survivor. numbered array represents letters to remove
    // E: 'abc',[1,1] => 'a'