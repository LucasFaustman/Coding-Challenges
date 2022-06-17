// Deployment to Live Site

// Once the website is complete, I'll deploy the site live and make sure any hosting and other website information is passed over to you. I will also provide you with resources on how to navigate your site and make changes moving forward.

function stringy(size) {
    // I can probably utilize a for loop, which goes up until the size, and adds 1 if num is odd, 0 if even
  //   first can declare a variable holding the string
    let result = ''
  //   then create the for loop
    
    for (let i = 1; i <= size; i++) {
      i % 2 !== 0 ? result += '1' : result+= '0'
    }
  //   then return result
    
    return result
  }
  
  // P Will always be a number, positive, and always use whole numbers
  // R: return a string representing alternating 1s and 0s
  // E: 3 => '101'