// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove (string) {
    //I can use split with !, then join again
  //   cant do above method. there are just asking for one excalamtion mark to be removed from end. i can use slice here
    return string[string.length - 1] === '!' ? string.slice(0,-1) : string
  }
  
  // P: will be a string. will always be a string
  // R: return a string removing the exclamation marks
  // E: Hello! => Hello