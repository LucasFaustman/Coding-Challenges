// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
    //   surface area is equal to 2(l*w) + 2(l*h) + 2(h*w)
      let surfaceArea = 2*(width*height) + 2*(width * depth) + 2*(height*depth)
    //   volume is width * height * depth
      let volume = width * height * depth
    //   then return both in an array
      
      return [surfaceArea,volume]
      
    }
    
    // P 3 parameters. always will be positive integers
    // R: return an array of 2 positive integers that represent the total surface area of a box as an array
    // E:(4, 2, 6), [88, 48]