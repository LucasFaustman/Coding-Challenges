// Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).



function maxTriSum(numbers){
    //Sort array then filter out dupes
    //then first sum of each first 3 elements
    
    let newSummedArr = numbers.sort((a,b) => b-a).filter((element,index) => numbers.indexOf(element) === index)
    
    return newSummedArr[0] + newSummedArr[1] + newSummedArr[2]
  }
  
  //P: will be an array of nums, sum pos, some neg, some 0. always length of 3. some duplications might come up
  // R: return an integer represent the max triplet sum in the array without duplications
  // E: [3,2,6,8,2,3] => 17 because 6,8,3 => 17