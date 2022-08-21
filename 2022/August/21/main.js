// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

function switcheroo(x){
  
    //I can split, then map through array with a ternary
    
    return x.split('').map(element => element === 'a' ? 'b' : element === 'b' ? 'a' : element).join('')
  
  }
  
  //P: will be a string of letters. unsure if always will be a string or always be letters
  // R: return a string with a's switched with b's, and viceversa, leaving c's
  // E: 'abc' => 'cba'