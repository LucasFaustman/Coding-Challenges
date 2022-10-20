// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.



function repeats(arr) {

    //filter out duplicate numbers using lastindexof and indexof
    //reduce
  
    return arr.filter(number => arr.indexOf(number) === arr.lastIndexOf(number)).reduce((acc,num) => acc + num,0)
    
  }
  
  
  //Will get an array of numbers. always valid. always have length. always be a number
  //Return a single integer representing the sum of the numbers inside the array that only occur ONCE
  //e: [4,5,7,5,4,8]),15 because 7 and 8 are the only numbers without duplicated
  
  
  console.log(repeats([4,5,7,5,4,8],15))
  console.log(repeats([9, 10, 19, 13, 19, 13],19))
  console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11],12))
  console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13],22))
  console.log(repeats([5, 10, 19, 13, 10, 13],24))