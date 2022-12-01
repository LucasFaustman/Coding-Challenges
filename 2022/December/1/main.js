// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.


//integer, positive. always valid, no funny business => 10, 5, 2
//print if integer is divisble by 2, print "Fizz", if divisible by 3, 'Buzz', if both, print 'Fizz Buzz'
//6

// 1,'Fizz','Buzz','Fizz',5,'Fizz Buzz'


let fizzBuzz = num => {
    // for loop from 1 to num
    for (let i = 1; i <= num; i++) {
      //conditionals if number is divisible
      //need to start with both 2 and 3
      if (i % 2 === 0 && i % 3 === 0) {
        console.log('Fizz Buzz')
      } else if (i % 2 === 0) {
        console.log('Fizz')
      } else if (i % 3 === 0) {
        console.log('Buzz')
      } else {
        console.log(i)
      }
    }
  }
  
  fizzBuzz(100)