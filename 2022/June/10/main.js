// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// // The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // I can use the filer method here to find if any element matches an element in geese
  //  I can use ! to get rid of all elements that are included in geese using the.includes method
    
    return birds.filter(element => !geese.includes(element))
  };
  
  // P: An array of birds. Will always be an array 
  // R: a filtered array without any geese, which are defined in the function as geese
  // E: ['Canadian','Russion', 'African'] => ['Canadian', 'Russian']