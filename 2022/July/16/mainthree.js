// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array) {
  
    //   first declare a variable containing the first element of the array
    let first = array[0].charCodeAt(0)
    
    // then create a for loop. starts at 0, ends at end of arr
    
      for (let i = 0; i < array.length; i++) { 
    //     if the first elementscharcode + i does not equal the next element of the array
    //     return a string using from charcode at to extract the string from the char code
        if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(i + first)
          }
     }
       
    
    }
    
    //console.log(findMissingLetter(['O','Q','R','S']))
    // P: will be an array. will always be an array with at least 2 length
    // R: rreturn a string character representing the missing letter
    // E: ['a','b','c','d','f'] => 'e'