// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified

function nicknameGenerator(name){
    //if name length is less than 4, return error
    if (name.length < 4) {
      return 'Error: Name too short'
    }
    // 2 conditionals. if name.charAt(3) === aeiou, then name.slice(0,3)
    //if not, name.slice(0,4)
    
    if (name.charAt(2) === 'a' || name.charAt(2) === 'e' || name.charAt(2) === 'i' || name.charAt(2) === 'o' || name.charAt(2) === 'u') {
      return name.slice(0,4)
    }
    else
      return name.slice(0,3)
  }
  
  //P: will always be a string. always will have the first letter capitalized and the rest lowercase
  //R: return a string representing a nickname of the original string. If 3rd letter is a consonant, return first 3 letters.
  // If 3rd letter is a vowel, return first 4 letters
  // E: 'Samanatha' => 'Sam'