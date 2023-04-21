// Array Addition I
// Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

function arrayAddition(arr) {
    arr.sort((a,b) => a- b)
  
    let largest = arr.pop();
  
    function findMatch(a) {
      let sum = a.reduce((acc,num) => acc + num,0)
      if (sum === largest) {
        return true;
      } else {
        for (let i= 0; i < a.length; i++) {
          let newArr = a.slice()
          newArr.splice(i,1)
          if (findMatch(newArr)) {
            return true
          }
        }
        return false;
      }
    }
  
    return findMatch(arr)
  }
  
  console.log(arrayAddition([5,7,16,1,2]))
  console.log(arrayAddition([3,5,-1,8,12]))
  
  
  
  //WIll be an integer array. always will be an integer array, never not valid
  
  //Return a boolean true if any combination of numbers can add up to our largest number of the array
  
  // Examples
  // Input: [5,7,16,1,2]
  // Output: false
  // Input: [3,5,-1,8,12]
  // Output: true