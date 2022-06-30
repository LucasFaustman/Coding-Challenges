// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

function arr(N) {
    //   so I can probably use a tconditional. if there is n, run a for loop. if not, return []
      
      let newArr = []
      if (!N) {
        return []
      } else
    //     start at 0, end 1 less than N. then push to newArr
        for (let i = 0; i < N; i++) {
          newArr.push(i)
        }
        return newArr
      
    };
    
    // P: Will be a number. not always a number though! it's optional, so a default value is given
    // R: an array representing numbers for 0 to parameter
    // E: 4 => [0,1,2,3,4]