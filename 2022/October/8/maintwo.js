// Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia

// Task
// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.



var runLengthEncoding = function(str){
    //first declare two arrays. one sub array, one to be returned
    
    let mainArr = []
    
    let subArr = [1,'']
    
    //for loop
    
    for (let i = 0; i <= str.length; i++) {
      //if subArr[1] is equal to str[i], subArr[0] += 1
      //each time runs, push to subArr
      //if not equal, then push subArr to mainArr and make subArr [1,str[i]]
      
       if (subArr[1] === '') {
        subArr[1] = str[i]
      }else if (subArr[1] === str[i]) {
        subArr[0] += 1
      } else if (subArr[1] !== str[i]) {
        mainArr.push(subArr)
        subArr = [1, str[i]]
      } 
      
    }
    
    return mainArr
  }
  
  //Will be a string. string should be words and letters, but unclear if always will be. unclear if always valid or not empty
  //Return an array of arrays where each nested array has the number of times the letter shows up consecutively
  //"hello world!" => [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]