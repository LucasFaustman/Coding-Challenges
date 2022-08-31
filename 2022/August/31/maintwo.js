// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
  
    //I can declare two variables. each variable filters through array looking for numbers, then reduce to add them all
    //then return integervariable - stringvariable
    
    let integerNums = x.filter(element => typeof element === 'number').reduce((acc,num) => acc + num,0)
  
    let stringNums = x.filter(element => typeof element === 'string').map(Number).reduce((acc,num) => acc + num,0)
  
    return integerNums - stringNums
  
  }
  
  //P: will be an array of strings and numbers. strings will represent a number though
  // R: return an integer representing the integers minus the string integers
  // E: [1,2,'3',4] => 7 - 3 = 4