// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  
    // create 2 variables. One variable for the area code, another for the last 7 numbers
    //   return template literal with both variables
      
      let areaCode = numbers.slice(0,3).join('') //areacode without paranthesis
      let nextThree = numbers.slice(3,6).join('')
      let finalFour = numbers.slice(6,numbers.length).join('')
      
      return `(${areaCode}) ${nextThree}-${finalFour}`
    }
    
    // P: Will be an array of numbers. Number will always be whole and positive.
    // R: Return a string. String will follow the regular phone number format. Area code in paranthesis, a space, 3 numbers,dash, then 4 numbers
    // E:console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,1])) => (123) 456 7891