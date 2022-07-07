// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b){
    //   I first need to convert r g and b into a string. I can use .toString(16) to break the string down to a hexidecimal
    // i should actually create a function to do the actual converting.
    
    function colourToHex(color) {
    //   first should check if param is greater than 255. if so, return FF
      if (color > 255) {
        return 'FF'
      } 
    //   then make the rgb value into a hexadecimal
      let hexadecimal = color.toString(16);
    //   if hexadecimal is less than or equal to 0, return 00
       if (hexadecimal <= 0) {
        return '00'
    //      if length is equal to 1, add another 0 to beginning
      } else if (hexadecimal.length == 1){
       return "0" + hexadecimal 
      }  else
        return hexadecimal
      }
      
    // return values added to eachother and make them uppercase
      return (colourToHex(r) + colourToHex(g) + colourToHex(b)).toUpperCase()
    }
    
    // P: will be 3 numbers. looks like the numbers might be negative or positive integers.
    // R: return a 6 character string representing the hex code conversion of the numbers
    // E: => 0,0,0 => '000000' or (255,255,255) => 'FFFFFF'