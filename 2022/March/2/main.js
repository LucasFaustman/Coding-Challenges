// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    //   I can utilize an array method here to check if the number is equal to the last index of that number. if so, return num
    // filter returns a string so I should make a variable then return with Number()
      const loneNumber = numbers.filter((num,index) => numbers.indexOf(num) === numbers.lastIndexOf(num)).join()
      
      return Number(loneNumber)
    
    }
    
    // P: an array of numbers. Always will be valid
    // R: return a single number, which represents the stray number of the array
    // E: 17,17,17,4 => 4