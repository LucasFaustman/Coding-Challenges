// We want to generate a function that computes the series starting from 0 and ending until the given number.

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
  //     if number is negative or 0, use a conditional to return a specific string
      if (count < 0) {
        return `${count}<0`
      } else if (count === 0) {
        return '0=0'
      }
  //     first declare a string to hold the sum value and a sum variable
      let newStr = ''
      let sum = 0
  //     then use a for loop. each time loop runs, add + i and add to sum
      for (let i = 0; i <= count; i++) {
        newStr += `${i}+`
        sum+= i
      }
  //     then return a template literal of the string = sum
      return `${newStr.slice(0,-1)} = ${sum}`
    };
  return SequenceSum
    
  
  })();
  
  // P: will be an integer. sometimes negative
  // R: a string representing the series of addition between 0 and the number
  // E:6 => "0+1+2+3+4+5+6 = 21")