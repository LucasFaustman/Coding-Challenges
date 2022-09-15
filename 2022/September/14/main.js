// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    //create new string
   let newStr = ''
   
   //then convert num to an array of numbers
   let newArr = num.toString().split('').map(Number)
   
   //then loop through array
   for (let i = 0; i < newArr.length; i++) {
     //if the current iteration of array is odd and the next iteration, add a dash next to the current iteration
     if (newArr[i] % 2 !== 0 && newArr[i+1] % 2 !== 0) {
       newStr += `${newArr[i]}-`
     } else
       //if not just add the number to the string
       newStr += newArr[i].toString()
   }
   
   //return str. if last character is a dash, slice it off, if not just return the str
   return newStr[newStr.length - 1] === '-' ? newStr.slice(0,-1) : newStr
 }
 
 //P: will be an integer, always will be non negative
 // R: return a string representing the integer that has dashes inserted between each two odd digits in the parameter(not including 0)
 // E: 454793 => '4545-9-3'