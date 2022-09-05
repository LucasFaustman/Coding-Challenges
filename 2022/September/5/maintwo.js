// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value){

    //I can do 5 conditionals, one for each length up to 5
    
    if (value.toString().length === 1) {
      return `Value is 0000${value.toString()}`
    } else if (value.toString().length === 2) {
      return `Value is 000${value.toString()}`
    } else if (value.toString().length === 3) {
      return `Value is 00${value.toString()}`
    } else if (value.toString().length === 4) {
      return `Value is 0${value.toString()}`
    } else if (value.toString().length === 5) {
      return `Value is ${value.toString()}`
    }
  }
  
  //P: will be an ineteger. seems like it will never be negative, might be 0
  //R: return a string that is 'Value is' where the end is a 5 digit padded number
  // E: 1204 => 'Value is 01204' 1 -> 'Valus is 00001'