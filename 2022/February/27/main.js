// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    //   I first need to create a conditional that says if num is null or no length, then return
    // empty arr
    //   then I can use array methods to sort the array
      if (nums === null || !nums.length) {
        return []
      } else 
        return nums.sort((a,b) => a-b)
      
    
    }
    
    // P: Array of nums. Sometimes will be null or emtpy! Nums can be positive or negative
    // R: an array of numbers that are sorted
    // E; [2,3,1] => [1,2,3]