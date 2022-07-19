// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    //   can first declare a string
      let newStr = ''
    //   then convert number to a string
       let numsToStr = num.toString()
    
    //    declare a zero count that you can reference later for .repeat
       let zeroCount = '0'
    //   then use a for loop.
       for (let i = 0; i < numsToStr.length; i++ ) {
    //      each time loop runs begining at end, add 0 based on index to str and to i
    //      I can repeat the zero count based on the length of the str - 1 - i, then plus the + sign 
    //      add conditional that if element is not 0
         if (numsToStr[i] !== '0') {
         newStr += numsToStr[i] + zeroCount.repeat(numsToStr.length - 1 - i) + ' + '
         //console.log(numsToStr[i])
           }
       }
    //   return string which is sliced to get rid of the last ' + '
      return newStr.slice(0,-3)
    }
    
    // P: will always be be a positive integer
    // R: return the number in expanded form as a string
    // E: 12 => 10+2