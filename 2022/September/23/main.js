// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.



function maxGap (numbers){
    //first need to sort array
    //after sorting, for loop
    //each time iterates, check if newInt if less than our current equation. if so, reassign var
    
    let newSortedNums = numbers.sort((a,b) => a - b) 
    
    let newNum = 0
    
    for (let i = 0; i < newSortedNums.length; i++) {
      if (i === 0) {
        newNum = Math.abs(newSortedNums[i] - newSortedNums[i+1])
      } else if (Math.abs(newSortedNums[i] - newSortedNums[i+1]) > newNum) {
        newNum = Math.abs(newSortedNums[i] - newSortedNums[i+1])
      }
    }
    return newNum
  }
  
  //Will be an array of numbers. will be at least length 3. mixture of pos and neg and 0.
  //repition might happen
  //Return an integer representing the max different between successive elements in sorted form
  // maxGap ({13,10,5,2,9}) ==> return (4)