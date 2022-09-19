// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

function sumConsecutives(s) {
    //I can use for loop
    
    //declare a seperate num variable
    let numCount = 0
    //and a newarray
    let newArr = []
    //for loop
    for (let i = 0; i < s.length; i++) {
      //if the first iteration is equal to next, then increase numcount by the current number
      if (s[i] === s[i+1]) {
        numCount += s[i]
        //if no longer equal to next iteration, push our numCount + our number in array, then assign numCount back to 0 for other numbs
      } else if (s[i] !== s[i+1]) {
        newArr.push(numCount + s[i])
        numCount = 0
      }
    }
  //return newArr
    return newArr
  }
  
  //P: will be an array that contains only integers both positive and negative
  // R: return an array with a sum of numbers that are the same and consecutive
  // E: [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]