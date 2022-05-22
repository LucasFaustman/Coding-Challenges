// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    // Code here
    
    //first get average of 3 values passed in
    //conditional to calculte the grade associated with average
    
    let averagedNums = (s1 + s2 + s3) / 3
    
    if (averagedNums >= 90 && averagedNums <= 100) {
        return 'A'
  } else if (averagedNums >= 80 && averagedNums < 90) {
        return 'B'
  } else if (averagedNums >= 70 && averagedNums < 80) {
        return 'C'
  } else if (averagedNums >= 60 && averagedNums < 70) {
        return 'D'
  } else 
    return "F"
  
  
  }
  
  // Code here
    // prep
    // p: pass in 3 scores. scores are between 0 and 100. positive nums, and all nums are less than 100
    //R: you just want the function returned to no where. wants the letter grade returned
    //e: 
  //console.log(getGrade(70,70,70)) //average would be 70, return C
    //console.log(getGrade(90,80,70)) //average would be 80, return b