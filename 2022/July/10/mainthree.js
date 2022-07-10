// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    //   I should firsty create a new string representing the returned string of numbers
      let newStr = ''
      
    //   then I can create for loop. each iteration of the loop looks at the letter, gets the alphabet position, then pushes to newstr
      
      for (let i = 0; i < text.length; i++) {
    //     I can use the .charCodeAt method to get the character code. if it's greater than 64 and less than 91, -64 to it and push to newstr
        let alphabetCounter = text.toUpperCase().charCodeAt(i) 
        if (alphabetCounter > 64 && alphabetCounter < 91) {
          newStr += alphabetCounter - 64  + ' '
        }
      }
      
    //   return newStr and remove the last character which is a string
      
      return newStr.slice(0,-1)
      
    }
    
    // P: will be a string. always given a string
    // Return a string of numbers representing each letter with its position in the alphabet
    // E: "The sunset sets at twelve o' clock." =>
    // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"