// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.



function last(x){

    //I can probably use the split sort method
    //for sorting, i can use .charCodeAt to get the char code number of the last character of string
    
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length-1))
  }
  
  //P: will be a string. always will be a valid string
  // R: return an array of strings which are sorted by the last character of each string. if letter is same, show array in order they first appeared
  
  // E: 'Hello my name is Lucas' => ['name' 'hello' 'is' 'lucas' 'my']