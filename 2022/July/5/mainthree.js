// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

function checkExam(array1, array2) {
    //  I can maybe use a for loop here to compare between array 1 and 2
    //   first declare a result variable
      let sum = 0
      
    // for loop. starts at array1, use conditionals to check if array 2 matches up
      
      for (let i = 0; i < array1.length; i++) {
    
            if (array1[i] === array2[i]) {
              sum+= 4 
            } else if (array1[i] !== array2[i] && array2[i] !== "") {
              sum-= 1
            } 
     
            
            
          }
      
    //   then return sum
      return sum < 0 ? 0 : sum
    }
    
    
    // P: two arrays. will always be an array. not empty
    // Return a number representing the score for the array of answers. +4 for each correct, -1, for incorrect, 0 for blanks
    // E: ["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6