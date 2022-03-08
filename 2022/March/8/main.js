
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n)
{
//   First create a variable to contain sum 
//   Then we can create a for loop, that adds to sum each time it runs.
//   Divide by 1 to get a decimal to two places. You can start for loop at 0, then times i by 3 and add 1 to get
// the next series
//   return sum to two decimal points with a string

  var sum = 0;
  for(var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2).toString()

} 

// P: going to be a integer. only natural numbers.
// R: Return a string up to two decimal points
// E: 4 => 1 + 1/4 + 1/7 + 1/10 => 1.49