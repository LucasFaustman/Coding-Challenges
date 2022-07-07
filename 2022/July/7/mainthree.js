// Complete the solution so that the function will break up camel casing, using a space between words.

// complete the function
function solution(string) {
  
    //   I need to probably make the string into an array. check if a letter is uppercase. 
    //   if letter is uppercase, I can maybe do a template literal that adds a space before the element
    //   then join everything together
      
      return string.split('').map(element => element.toUpperCase() === element ? ` ${element}` : element).join('')
        
    }
    
    // P: will be a string of camelcased words. might be empty
    // R: return a string that represents the camelcase broken up with spaces between words
    // E camelCase => 'camel Case'