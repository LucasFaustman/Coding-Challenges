// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

function dup(s) {
    //declare new array and string
      
      let newArr = []
      let newStr = ''
      //quadradic for loop
      //each time nested loop runs, check if last letter of string is equal to our letter. if not, add to string
      //after nested loop runs, push newStr to newArr and set newStr back to empty
      
      for (let i = 0; i < s.length; i++) {
        let string = s[i]
        for (let j = 0; j < string.length; j++) {
          if (string[j] !== newStr[newStr.length -1]) {
            newStr += string[j]
          }
        }
        newArr.push(newStr)
        newStr = ''
    
      }
      return newArr
    };
    
    //Will be an array of strings. strings will be lowercase only, no spaces. might be numbers inside? always valid
    //Return a new string will all consecutive duplicates removed from each string in the array
    //E["kelless","keenness"]), ['keles','kenes']