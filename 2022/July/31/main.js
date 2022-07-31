// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {

    //   first declare a new arr
      let newArr = []
    //   then for loop. starts at 1, ends at n. each iteration push i to newarr
      for (let i = 1; i <= n; i++) {
        newArr.push(i)
      }
    //   return new arr
      return newArr
    }
    
    // P Positive integer greater than or equal to one. n will always be provided
    // R: an array of positive integer from 1 to n
    // E: 5 => [1,2,3,4,5]