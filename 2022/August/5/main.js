// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
    // I can use the include method here
    return arr.includes(item)
  }
  
  //P: will be an array and an item? Item seems to be an integer or a string. array unclear if always will be an array
  // R A boolean representing if item is inside of arr
  // E: [1,2,3,4,5], 3 => true
  // ['yes','no','lucas'],'maybe' => false