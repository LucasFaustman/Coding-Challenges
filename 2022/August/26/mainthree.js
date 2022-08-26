
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

function inArray(array1,array2){
    //create new array containing substrings
    let newArr = []
    //for loop. goes through array1. if array2.includes(array1[i]), then push to newarr
    for (let i = 0; i < array1.length; i++) {
      //nested array to check through each element of array2
      for (let j = 0; j < array2.length; j++) {
        //if array2[j] includes array1[i] and there isnt a match, push to new arr
        if (array2[j].includes(array1[i]) && !newArr.includes(array1[i])) {
          newArr.push(array1[i])
        }
      }
      }
    
    //then return newarr which is sorted
    return newArr.sort()
  }
  
  //P: will be 2 arrays of strings. seems like it will always be an array of strings
  // R: return an array of strings from the first array that should up in the second array
  // E: ['arp','live','strong'],[lively, harp, armstrong] => ['arp','live','strong']