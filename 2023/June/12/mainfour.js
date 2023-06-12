// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// examples:

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1

// [4, 2, 3] is a nice array because

// 4 = 3 + 1
// 2 = 3 - 1
// 3 = 2 + 1 (or 3 = 4 - 1)

// [4, 2, 1] is a not a nice array because

// for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

function isNice(arr){
    //if empty, return false
    if (!arr || !arr.length) {
      return false;
    }
    //create a new set of our arr numbers
    //for loop
    //if set does not have num-1 || num+1, return false
    //return true after for loop
    let arrSet = new Set(arr)
    
    for (let i= 0; i < arr.length; i++) {
      let n = arr[i]
      if (!arrSet.has(n-1) && !arrSet.has(n+1)) {
        return false;
      }
    }
    return true;
  }
  
  //WIll be an array. might be an empty array. will be an array of integers. integers are unclear to be positive, negative, or 0
  
  //Return a boolean true if the array is nice, false otherwise
  
  //an array is nice if every value n has an n-1 or n+1 in the array
  
  //[2, 10, 9, 3] => true is a nice array because
  
  //  2 =  3 - 1
  // 10 =  9 + 1
  //  3 =  2 + 1
  //  9 = 10 - 1