// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

function decipherThis(str) {
    //I need to map!
      //split
      //since the characters seems like its only going to be 2 or 3 characters, i can add a conditional inside my map
      return str.split(' ')
    .map(element => Number(element[2]) == element[2] ? 
         String.fromCharCode(element.slice(0,3)) + element.slice(3) 
         : String.fromCharCode(element.slice(0,2)) + element.slice(2) )
      //now build the string
      .map(element => element[0] + (element.length > 1 ? element[element.length-1]: '') + element.slice(2, element.length - 1) + (element.length > 2 ? element[1] : ''))
      .join(' ')
    
    }; 
    
    //Will be a string. only letters and spaces. seems like it will always be valid
    //Return a string where each word, the second and last letter are swapped, and the char codes are replaced by its letter
    //decipherThis('72olle 103doo 100ya'); // 'Hello good day'