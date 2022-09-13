// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

function maxDiff(list) {
    //if array is empty, return 0
    if (!list.length) {
      return 0
    }
    
    //then sort the array
    let sortedArr = list.sort((a,b) => a- b)
    
    //get the min and max from sortedArr
    let minNum = Math.min(...sortedArr)
    let maxNum = Math.max(...sortedArr)
    
    //return using math.abs
    return Math.abs(maxNum - minNum)
  };
  
  //P: will be an array. array will contain positive or negative integers. might be empty. wont be sorted
  // R: return an integer representing the highest possible difference between 2 integers in the array
  // E: [5,10,50,1] => 50-1 = 49