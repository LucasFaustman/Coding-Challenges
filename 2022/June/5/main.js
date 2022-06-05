// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.


function expressionMatter(a, b, c) {
    //   Create some sort of an array. each element inside array will have different possible calculation. 
    //   Then I can use Math.max to return the max value of the array
      
      let result = Math.max(
        a+b+c,
        a*b*c,
        a*b+c,
        a+b*c,
        a *(b+c),
        (a+b) * c
      )
      return result
    }
    
    // P: a b and c will be integers. always will be integers, positive. always will be greater than 1, less than 10
    // R: the max value obtained after inserting the following operators and brackets (+. *, ())
    // 1, 2 ,3 => 9 because (1 + 2) * 3 = 9