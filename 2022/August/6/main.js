// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  
    //i first should sort the array in descending order
    
    let newArr = arr.sort((a,b) => b-a)
    //then use a for loop. I want to grab index - index, then add to a sum variable declared below
    let sum = 0
    //for loop needs to end one before the last element so that we dont get undefined
    for (let i = 0; i < newArr.length - 1; i++) {
     
      sum += (newArr[i] - newArr[i+1])
    }
    
    //return sum
    return sum
    
  }
  
  //P: will be an array of integers. integers might be empty or have one element. integers may be positive or negative
  // R: return an integer representing the sun of differences between consecutive pairs in the array in descending order
  // E: [2, 1, 10]  -->  9 because the descending order is [10,2,1]. 10-2 is 8. 2-1 is 1. 8+1 is 9