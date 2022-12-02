// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 


//Will be a string. unclear if always a string, if always valid, unclear about string length, might be number or symbol
//Return a string that is reversed with the reverse method
//E: 'Lucas' -> 'sacuL'
//"Hello I am Lucas" => 'sacuL ma I olleH'


function reverseLetters(string) {
    // //newstring
    // let newStr = ""
  
    // //for loop at end of string
    // for (let i = string.length - 1; i >= 0; i--) {
    //   newStr += string[i]
    // }
  
    // return newStr
  
    let newStr = ""
  
    for (let char of string) {
      newStr = char + newStr
    }
    return newStr
  }
  
  console.log(reverseLetters("Hello I am Lucas"))
  console.log(reverseLetters("Lucas"))
  