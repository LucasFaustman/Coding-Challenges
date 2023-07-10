// Task
// You will receive an array as parameter that contains 1 or more integers and a number n.

// Here is a little visualization of the process:

// Step 1: Split the array in two:

// [1, 2, 5, 7, 2, 3, 5, 7, 8]
//       /            \
// [1, 2, 5, 7]    [2, 3, 5, 7, 8]
// Step 2: Put the arrays on top of each other:

//    [1, 2, 5, 7]
// [2, 3, 5, 7, 8]
// Step 3: Add them together:

// [2, 4, 7, 12, 15]
// Repeat the above steps n times or until there is only one number left, and then return the array.

function splitAndAdd(arr, n) {

    //recursive helper function that will do the logic
    //declare a res array
    let res = arr;
    //while n > 0
    while (n > 0) {
        res = helper(res)
        n--
    }
    
    return res;
  }
  
    function helper(a) {
      //add a 0 if the array is not even, which will allow us to easier add each element
          if (a.length % 2 != 0) a.unshift(0);
  
      //returnedarr variable
        //get the mid point
      let middle = Math.floor(a.length / 2);
      
      //left and right side
      let left = a.slice(0, middle)
      let right = a.slice(middle)
  
     return left.map((element, i) => element + right[i])
    }
  
  //Will be an array. contains 1 or more integers and a number n. unclear if both always valid, but will assume based on test case
  //Return an array, where we split the og array in 2, put arrays ontop of eachother, then add, repeat n number of times
  //E: [4, 2, 5, 3, 2, 5, 7], n=2
  
  //    [4,2,5]
  //  [3,2,5,7]
  //[3,6,7,12]
  // [3,6]
  //  [7,12]
  //ultimately equal 10,18