// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    //   I want to first add up all the num of both even and odds.
      
      let numOfOdds = integers.filter(element => element % 2 === 0).length
      let numOfEvens = integers.filter(element => element % 2 !== 0).length
    //   Then utilize a conditional to see if even is bigger than odd or viceverse
      
    let result = numOfEvens > numOfOdds ? integers.filter(element => element % 2 === 0).join()
                    : integers.filter(element => element % 2 !== 0).join()
  // I need to convert str to number
    return parseInt(result)
  
    
    //   then if one is greater than the other, return the number of the lesser
    }
  
  // P: Will be an array which will have a length of at least 3 of integers
  // R: Return a number representing the outlier even or odd number
  // E: [2,4,6,9.10] => 9(the only odd numbers)