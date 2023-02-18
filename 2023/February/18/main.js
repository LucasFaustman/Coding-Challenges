// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

function scrollingText(text){
    //create a newarray
    let newArr = [];
    
    //have an index
    let index = 0;
    
    //for loop
    while (index < text.length) {
      //push to newarr
      //split our text, slice it at index. then, add letters not included from 0 to index to string
      //convert back to a string using join, touppercase
      //iterate index by 1
      newArr.push(text.split('').slice(index).concat(text.slice(0,index)).join('').toUpperCase())
      index++
    }
    return newArr;
  }
  
  //Will be a string. unclear if string will always be valid. unclear what string will contain
  //but it seems like lowercase english letters
  
  //Return an array with all possible rotations of the given string in uppercase letters
  
  //"codewars" => [ "CODEWARS",
  //   "ODEWARSC",
  //   "DEWARSCO",
  //   "EWARSCOD",
  //   "WARSCODE",
  //   "ARSCODEW"