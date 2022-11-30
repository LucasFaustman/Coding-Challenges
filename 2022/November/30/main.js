// Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

function double(array) {
    //use the map method
  return array.map(num => num*2)
}

//Will be an array. Unclear if always will be integers, or floats, or maybe sometimes negatives, strings, symbols, etc
//Return a new array where each value inside the array is doubled
//E: [1,2,5,2.5] => [1,4,10,5]