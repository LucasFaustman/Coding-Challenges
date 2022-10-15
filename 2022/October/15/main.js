// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

function dbSort(a){
    // create two variables. one variable will hold a sorted array of strings, other will contain sorted array of nums with filter
      
      let alphabetArr = a.filter(element => typeof element === 'string').sort()
      let numberArr = a.filter(element => typeof element === 'number').sort((a,b) => a - b)
      
      return numberArr.concat(alphabetArr)
    }
    
    //Will be an array. array will contain either nums or strings, or a mix. never will be empty or invalid
    //Return an array where the first half are numbers sorted in ascending order, followed by strings sorted in alphabetical order
    //["Banana", "Orange", "Apple", "Mango", 0, 2, 2] => [0,2,2,"Apple","Banana","Mango","Orange"])