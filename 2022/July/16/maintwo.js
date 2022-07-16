// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!



function capitalize(s){

    //   I can declare 2 variables. one for even, one for odd, that have the caaPitalized array
    // i can use the map method here on both
      
      let evenCap = s.split('').map((element,index) => index % 2 === 0 ? element.toUpperCase()
    : element.toLowerCase()).join('')
      
      let oddCap = s.split('').map((element,index) => index % 2 !== 0 ? element.toUpperCase()
    : element.toLowerCase()).join('')
      
    //   then return using a template literal
      
      return [evenCap, oddCap]
      
      
    };
    
    // P: a string .will always be a lowercase string with no space
    // Return one array with 2 elements. one element being evemn indexes capitalized, 
    // the other odd
    // e "abcdef" = ['AbCdEf', 'aBcDeF']