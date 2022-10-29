// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
  
    if (!numbers || !numbers.length) {
      return 0
    }
    
    //declare variable which uses reduce method 
    let sum = numbers.reduce((acc,num, currentIndex) => acc + (currentIndex % 2 === 0 ? num : 0),0)
    return sum * numbers[numbers.length - 1]
    //then * variable by numbers[numbers.length - 1]
  }
  
  //Will be an array of numbers. seems like will always be valid. always will be numbers, never symbols or letters. might not have a length
  //return an integer representing the sum of all integers that have an even index multipled by last integer in array
  //E: [1,2,3,4,5] => 1 + 3 + 5 = 13 * 5 = 65