// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){

    // I can use the every method to see if every element in array is less than or equal to limit
      
      return a.every(element => element <= limit)
    }
    
    // P: an array and a number. all values in array are numbers. limit will always be an integer
    // R: return a boolean representing if limit is passed, return false, if not, return true
    // E; [1,2,3] 10 -> true