// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

function findMultiples(integer, limit) {
  
    //   first create a new arr
      
      let newArr = []
    //   then a for loop. for loop will start at integer, be less than or equal to limit
    //   each time loop runs, check if i is divisible by integer, of so, push to new arr
      
      for (let i = integer; i <= limit; i++) {
        if (i % integer === 0) {
          newArr.push(i)
        }
      }
    //   then return newarr
      return newArr
    }
    
    // P: 2 integers. unsure if they will always be positive
    // R: return an array of numbers representing the multiples of the integer up to limit
    // 2,6 -> [2,4,6]