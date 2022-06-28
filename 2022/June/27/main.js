// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits){
  
    //   declare a variable representing the largest 5 digit number
      let longest = 0
    //   run a for loop that interates through digits. each time, it checks if a 5 digit number ir larger than variable declared
    // above. if so, assign new value to variable
    //   to make the digits work in a for loop, i can convert to a string
  
      
  
      for (let i = 0; i < digits.length; i++) {
        let number = digits.substr(i, 5)
        if ( Number(number) > longest) {
          
          longest = Number(number)
        }
        // i = newStr[i]+newStr.slice(i+1, 5)
        // return i
      }
    //   then return the variable
      
    return longest
    }
    
    // P Will always be a number of 5 digits. not specified if negative or integers/floats
    // R: return a 5 digit integer representing the highest five consecutive digits found
    // E: 1234567890 => 6789