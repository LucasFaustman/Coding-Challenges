// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

function printArray(array){
    //I can just use join here
    
    return array.join(',')
  }
  
  //P: will be an array of elements. seems like it will always be an array
  // R: return a string with commas dlimited elements of the array in same order. so get read of ""
  // E: ['h','o','l','a'] => 'hola'