// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]



//WIll be an array of numbers. always numbers! can be even or odd. could be pos or negative. always integer
//Return an array where we sort the odd numbers in ascending order while leaving the even numbers at their original position
//E: [7,1] => [1,7]
//[5,8,6,3,4] => [3,8,6,5,4]


function sortArray(array) {
    //create a new array
    let oddArr = []
  
    //for loop. if there is an odd numbers, push to addArr
    //then another for loop. if number is odd, replace it with the first number found in array then shift array to get rid of first
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        oddArr.push(array[i])
      }
    }
  
    oddArr.sort((a,b) => b-a)
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        array[i] = oddArr[oddArr.length - 1]
        oddArr.pop()
      }
    }
  
    return array
    
  }
  
  
  
  sortArray([5, 3, 2, 8, 1, 4], [1, 3, 2, 8, 5, 4])
  sortArray([5, 3, 1, 8, 0], [1, 3, 5, 8, 0])