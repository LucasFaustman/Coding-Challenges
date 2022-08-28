// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

function explode(s) {
    //i can use the map method with .repeat
    return s.split('').map(element => element.repeat(Number(element))).join('')
  }
  
  //P: will be a string of digits 0-9
  // R: return a string where each digit is repeated a number of times equal to its value
  // E: '321' => '333221'