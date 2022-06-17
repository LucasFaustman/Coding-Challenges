
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    //   I can probably just use a normal for loop that pushes to a new arr.
    //   for loop will math..pow(i,2)
      
      let newArr = []
      
      for (let i = 0; i <= n; n++) {
        newArr.push(i**2)
      }
      
      return newArr
      
    }