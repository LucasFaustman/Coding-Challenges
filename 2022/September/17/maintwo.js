// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

function dataReverse(data) {
    // create new array
    
    let newArr = []
    
    //for loop
    for (let i = 1; i <= data.length; i++) {
      //check if i is mod 8 === 0. if so, slice array then push to newArr
      if ((i + 1) % 8 === 0) {
        
        newArr.push(data.slice((i+1) - 8, i + 1))
        console.log(i)
      }
    }
    
    //then I can reverse the array then use.flat
   
    return newArr.reverse().flat()
    
  }
  
  //P: is going to be an array of integers. total number of integers will always be multiple of 9. always will be either 0 or 1
  // R: return a reversed array
  // E: [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1] => [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]