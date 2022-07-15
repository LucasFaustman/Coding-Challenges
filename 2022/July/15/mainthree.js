// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

function digPow(n, p){
    // first declare a sum variable
    
    let sum = 0
  //   split number into an array
    let splittedNumbers = n.toString().split('').map(Number)
    
  //   do a for loop. starts at 1; ends at splittednumbers.length; iterates by one each time
  //   each time loop iterates, add (splittedNumbers[i]**)
    
    for (let i = 0; i < splittedNumbers.length;i++) {
      
      sum += splittedNumbers[i]**p
      p = p+1
      
  
    }
    
    let summedResult = sum / n
    
  // if sum is a decimal or less than sum, return -1
  //   I need to declare a summedResult that divided n from sum. if its a float, then return -1
    return !Number.isInteger(summedResult) || sum < n ? -1 : sum / n
  }
  
  
  
  // P: both parameters will be integers and positive
  // R: a single integer representing the sum of digits of n taken to the successive powers of p is equal to k * n
  // 89, 1 => 8(1) + 9(2) => 89/89
  // 92 ,1 => 9(1) + 2(2) => 9 + 4 = 13 no
  // 46288, 3 => 4(3) + 6(4) + 2(5) + 8(6) + 8(7) => 2360688 / 46288 => 51!!