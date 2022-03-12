// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    // right away I see that 2 would equal 8. I can try cube rooting the num
    return n**3 
  }

//   P: Always will be a num, representing the row to sum from
//  R: Return a number that represents the sum of the row of the triangle
// E: 2 => 8 (3 + 8)