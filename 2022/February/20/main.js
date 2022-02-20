// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  
    // I can probably use the filter method to find numbers that are present in both a and b.
    // I can use the include method to see if element in a is present in b
      
      return a.filter(element => !b.includes(element))
      
    }
    
    // P: 2 arrays. Some arrays will be emtpy, but will always be an array
    // R: an array of numbers, which represents the subtraction of one list from another.
    // if value is present in both a and b, occurences must be removed
    // E: [1,2][2] => [1] or [1,2] [3] => 0