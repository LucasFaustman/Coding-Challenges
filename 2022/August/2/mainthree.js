// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

function partsSums(ls) {
  
    //if empty arr or not an arr, return [0]
    if (!ls.length) {
      return [0]
    }
    
      //create array. first element of array will add all parts together
  const arr = [ls.reduce((acc, cur) => acc + cur, 0)]
    
  
    
  //   then create a for loop. starts at 0, ends at ls.length
    for (let i = 0; i < ls.length; i++) {
    //subtract the value of ls[i] from arr[i]
      arr.push(arr[i] - ls[i])
      
    }
    
    //return summedarr
    
    return arr
  }
  
  // P: will be an array. unclear if always will be an array of not. some arrays can be very large
  // R: return an array that represents each sum of its parts
  // E: [0,1,3,6,10] => [20,20, 19, 16, 10, 0]