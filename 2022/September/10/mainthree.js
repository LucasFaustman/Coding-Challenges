// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

function min(arr, toReturn) {
    // 2 conditionals. if to return is index, return indexof min value. else return min value
    
    //create conditional. math.min(...arr)
    let minValue = Math.min(...arr)
    
    //if toreturn is index, return indexof(minvalue)
    if (toReturn === 'index') {
      return arr.indexOf(minValue)
    }
    //else return minvalue
    
    return minValue
  }
  
  //P: Will be 2 params - one will be an array and other will be a string. string will either be value or index
  // R: return the element that is either the smallest value or index depending on 2nd param
  // E: min([1,2,3,4,5], 'value') // => 1
  // min([1,2,3,4,5], 'index') // => 0