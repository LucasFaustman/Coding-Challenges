// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

function inAscOrder(arr) {
  
    //   i can probably do a simple return statement here. 
    // i can see if arr is equal to an array that is sorted with the sort method
    //   I can also use the join method just to make things easier
      
       
        return arr.join('') === arr.sort((a,b) => a -b).join('')
    
    }
    
    // P: will be an array. always will be an array. all inputs are valid
    // R: return boolean representing if array is in ascending order or not
    // E: [1,2,3,4,5] => true