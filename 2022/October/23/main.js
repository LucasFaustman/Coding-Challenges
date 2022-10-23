// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

function validateWord(s)
{
  //since case doesnt matter, make everything uppercase first
  let newStr = s.toUpperCase()
  
  //then create new obj
  
  let newObj = {}
  
  //for loop through string. if theres a match, add 1 to character, if not create new one and assign it one
  
  for (let i = 0; i < newStr.length; i++) {
    if (newObj[newStr[i]]) {
      newObj[newStr[i]] += 1
    } else
      newObj[newStr[i]] = 1
  }
  //then extract values out of object and check if every element in array is equal
  
  return Object.values(newObj).every(element => element === Object.values(newObj)[0])
  
  
}



//Will be a string. will have upper and lowercase strings. might be a number, no symbols
//Return a boolean representing if the string has characters that all occur the same number of times
//E: "abcabc",true