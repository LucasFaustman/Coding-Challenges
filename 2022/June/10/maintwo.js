// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    //   First convert the number to a string, then split it. Then I can use the reduce method to add the numbers, then join and convert back to a number
    //   Also need to make sure I utilize Math.abs to make sure number is absolute without any negative nums being passed in
          const splittedNum = Math.abs(number).toString().split('').map(Number)
        
        return splittedNum.reduce((acc,num) => acc+num,0)
    }
    
    // Will always be a number. might be positive or negative. Interger
    // R: A number representing the sum of the absolute value of the numbers digits
    // 10, => 1 -32 => 5