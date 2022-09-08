// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.

function solve(a,b){
    //i can use the filter method with !includes
     
     let uncommonA = a.split('').filter(element => !b.includes(element)).join('')
     let uncommonB = b.split('').filter(element => !a.includes(element)).join('')
     
     return uncommonA + uncommonB
   
   };
   
   //P: Will be 2 strings. seems like they were always be 2 strings
   // R: return a string representing the characters that are not common in the two strings
   // E: 'abcd','bdce' => 'bcd'