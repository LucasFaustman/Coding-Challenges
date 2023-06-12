// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

function smaller(nums) {
    let res = [];
    //left and right pointer
    //while left < right
  //if nums at left point is greater than numbs at right, add to counter
  //right--
  //at end of while loop, push counter to res
  
    for (let i= 0; i < nums.length; i++ ) {
      
    let left = i;
    let right = nums.length - 1;
    let counter = 0
  while (left < right) {
    if (nums[left] > nums[right]) {
      counter++
      }
    right--
  }
  
  res.push(counter)
  }
  return res;
  }

//WIll be an array of numbers. always will be an array. numbers will be integers, unclear if they might be positive, negative, or 0

//Return an array containing at index i the amount of numbers that are smaller than arr[i] to the right

//E: * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
//* Input [1, 2, 0] => Output [1, 1, 0]