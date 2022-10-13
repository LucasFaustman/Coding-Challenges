// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

function fizzBuzz(n) {
    //for loop
    //do a condtional inside of the for loop. start with 3 and 5 though
  
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizzbuzz')
      } else if (i % 5 === 0) {
        console.log('Buzz')
      } else if (i % 3 === 0) {
        console.log('Fizz')
      } else
        console.log(i)
    }
  }
  
  fizzBuzz(15)
  
  
  
  //a number. unclear if always a number. will always be positive integer. never will be a float
  
  //consolelog every integer from 1 to the input. however, if input is divisble by 3, console log 'fizz', divisible by 5, consolelog "buzz", and if divisible by both 3 and 5, consolelog "fizz buzz"