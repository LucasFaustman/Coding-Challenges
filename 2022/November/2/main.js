// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(string) {
    //sort
    //split, then sort
    return string.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
  }
  
  
  //A string of words. will always be valid. unclear if upper or lowercase, or never numbers, or never symbols
  //Return an array that is sorted alphabetically based on the final character of each
  
  
  console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
  console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
  console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to'] )