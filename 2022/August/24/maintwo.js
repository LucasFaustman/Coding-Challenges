// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

function getNumberFromString(s) {
  
    //split,filter our letters by converting number(element) and seeing if its equal in value to element. then filter out spaces
  //   then join
    
    let nums = s.split('').filter(element => Number(element) == element).filter(element => element !== ' ').join('')
    //return parseint(nums)
    return parseInt(nums)
  }
  
  console.log(getNumberFromString("123"))
  
  //P: will be a string
  // R: return an integer, removing all non digit characters from string
  // E: 'h3ll0' -> 30