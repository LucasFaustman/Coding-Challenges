// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

function duplicates(arr) {
 
    //get elements of array where our index of our element !== our current index. thus, getting all duplicates
  let filtered = arr.filter((element,index) => arr.indexOf(element) !== index)
  //get rid of duplicates of duplicates
  return [...new Set(filtered)]
  
  }
  
  
  //Will be an array of nums. will always be a valid array, will always be integers! unclear if always positive or negative. might be duplicates
  
  //Return a new array of all the duplicates inside of the array
  
  //[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
  // [0, 1, 2, 3, 4, 5]                ==>  []