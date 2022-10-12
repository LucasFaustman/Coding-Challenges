// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false
// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

function tripleX(str){
  
    //if no x's in string, return false
    if (!str.includes('x')) {
      return false
    }
    
    //do a for loop
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'x' ) {
        return str[i+1] === 'x' && str[i+2] === 'x'
      } 
    }
  }
  
  //Will be a string. might be capital or not. unclear if always string or always with letters
  //Return a boolean representing if the first instance of lower case x is followed by two more x's
  // tripleX("abraxxxas") → true