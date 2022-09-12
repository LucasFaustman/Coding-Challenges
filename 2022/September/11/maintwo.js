// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

function getMissingElement(superImportantArray){
    //first sort array and assign to variable
    
    let newArr = superImportantArray.sort((a,b) => a - b)
    
    //then loop through array. if [i+1] !== i + 1, return i+1
    
    for (let i = 0; i < newArr.length; i++) {
      //first check if there is a 0, if not, return 0
      if (!newArr.includes(0)) {
        return 0
        //if not, then if [i+1] !== i + 1, return i+1
      } else if (newArr[i + 1] !== newArr[i] + 1) {
        return newArr[i] + 1
      }
    }
  }
  
  //P: an array of numbers! numbers will be between 0 and 9
  //R: return missing number betwene 0-9
  // E: [1,2,3,4,5,6,7,8,9] => 0