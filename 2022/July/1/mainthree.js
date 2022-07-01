// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    // Return a sorted array.
  
  //   I first need to create an array that holds the odd numbers
    
  const odd = array.filter(element => element % 2).sort((a,b) => a - b)
  
  // then I can return a new array which pops in numbers from odd array if the element is odd
  
  return array.map(x => x % 2 ? odd.shift() : x)
  }
  
  // P: Will be an array of numbers. Might be negative or positive numbers. Sometimes will be an empty array
  // R: A new array which represents odd numbers sorted in ascending order without changing the even number positions
  // [7,1] => [1,7] [5,8,6,3,4] => [3,8,6,5,4]