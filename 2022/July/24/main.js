// ou need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

function reverse(string){
    //probably a sinple split reverse join
    return string.split(" ").reverse().join(" ")
  }
  
  //  p: string. might be empty but will Lsays be a string
  // r: return a string where the sentence is reversed
  //e: 'hello there' -> "there hello""