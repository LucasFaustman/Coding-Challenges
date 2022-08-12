// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {

    //I think we can split and map the array.
    
    return str.split(' ').map(element => `${element} ${element.length}`)
  }
  
  //P: will be a string. string will always have at least one element and words will be seperated by space
  // R: return an array with the length of each word added to each element 
  // E: 'lucas is funny' => ['lucas 5', 'is 2', 'funny 5']