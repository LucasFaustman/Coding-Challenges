// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x){

    //we can first get the problem into its charcode
    //do this by splitting, then mapping through array. we need to further split each numberthen add up everything using reduce
    let total1 = x.split('').map((element,index) => x.charCodeAt(index)).join('').toString().split('').map(Number).reduce((acc,num) => acc + num,0)
    //do samething for total 1. but before reduce, map through each element and convert each 7 to a 1
    let total2 = x.split('').map((element,index) => x.charCodeAt(index)).join('').toString().split('').map(numbers => numbers.toString().split('')
                                    .map(number => number === '7' ? '1' : number).join('')).map(Number).reduce((acc,num) => acc + num,0)
    
  
  //return Math.abs(total1 - total2)
    return Math.abs(total1 - total2)
    
  
  }
  
  
  
  
  //P: will be a string of letters. seems like it will always be a string
  // R: return a combined number with all letters in original string turned into the char code, minus
  //the same paramters with all 7's replaced with 1's
  // E: 'ABC' => 65,66,67 => 656667