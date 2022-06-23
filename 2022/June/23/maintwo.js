// // Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// // Square all numbers k (0 <= k <= n) between 0 and n.

// // Count the numbers of digits d used in the writing of all the k**2.

// // Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Note that 121 has twice the digit 1.

function nbDig(n, d) {
    // I can first create a variable representing the count of numbers
  
  let count = 0
  
  //   create a for loop, which squares each number. if square includes 1, then add to count.
  
  for (let i = 0; i <= n; i++) {
  
    let newNum = i**2
    if (newNum.toString().includes(d)) {
  //     I have realized I need to count the amount of d's in n. To do this, I can use filter and the length. Filtering out non d's
      count += newNum.toString().split('').filter(element => element == d).length
    }
  }
  
  //  then return count
  
  return count
  }
  
  // P is going to be two numbers, always be two numbers
  // R: a count representing the number of d's inside of the count of n**2
  // E:10,1 -> 4