// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    //   I want to convert n to string, split into array, then add array elements, then turn into number
    //   add a conditiona that asks if number length > 1; if so, run the function again
    //   if not, return the number
      
      let sString = n.toString().split('').map(Number).reduce((acc,num) => acc + num,0)
      
      if (sString < 10) {
        return sString
      } else 
        return digital_root(sString)
    }

// P: WIll always be a positive integer, and will always have an integer
// R: return a single one digit number representing the sum of all digits in the number
// E: 16 => 1 + 6 which is 7. 
// 942 => 15 => 6