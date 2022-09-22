// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

function arrayLeaders(numbers){
    //first create new array
    let newArr = []
    //then I can do a for loop of the og array
    //each time it loops, see if numbers[i] > numbers.slice(i + 1).reduce(). if so, add to newArr
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers.slice(i + 1).reduce((acc,num) => acc + num,0)) {
        newArr.push(numbers[i])
      }
    }
    //then return newArr
    
    return newArr
  }
  
  ///P: will be an array of nums. will be a mixture of pos,neg and 0's. might be repition of numbs. will be at least size of 3
  // R: return an array of nums representing the leaders in the array, or nums that are greater than the sum of elements to right side
  // E: [1,2,3,4,0]), [4] , because 4 > 0.