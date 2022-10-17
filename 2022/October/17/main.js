// You are given array of integers, your task will be to count all pairs in that array and return their count.

// Notes:

// Array can be empty or contain only one value; in this case return 0
// If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

function duplicates(array){
  
    //if array is empty or null, return 0
    
    if (!array || !array.length) {
      return 0
    }
    
    //declare a variable that represents count
    
    let count = 0
    
   //sort array
    let sortedArr = array.sort((a,b) => a - b)
    
    //for loop
    for (let i = 0; i < sortedArr.length; i++) {
      //if our number is equal to next, count++ and increase i by one to skip 2 numbers
      if (sortedArr[i] === sortedArr[i+1]) {
        count++
        i+=1
      }
    }
    
    return count
    
  }
  
  //Will be an array. array can be empty or contain only one value, in this case return 0. will always contain just numbers. max array length is 1000. range of values in array between 0 and 100
  //Return a number representing the amount of pairs inside the array
  //E;[1, 2, 5, 6, 5, 2]  -->  2