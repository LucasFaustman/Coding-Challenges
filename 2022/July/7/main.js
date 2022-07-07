// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
    // we can probably use a normal for loop that pushes to a string.
    
  //   first declare a newstr
    let newStr = ''
    
  //   then for loop. starts at 1, ends at 10
    for (let i = 1; i <= 10; i++) {
  //   each loop, add a template literal which has i, then times number, = to i * number
  //     \n represents a new line and should come at the end of each loop of the string besides the last
      newStr += `${i} * ${number} = ${i * number}\n`
    }
  //   return the original string, but this time getting rid of the last character which is \n
    return newStr.slice(0,-1)
  }
  
  // P: will be a number. always will be an integer between 1 and 10
  // R: return a multiplication table(string) for the number. only between 1 and ten
  // E: 1 => 1*1 1*2 1* 3 1*4 1*5 1*6 1*7 1*8 1*9 1*10