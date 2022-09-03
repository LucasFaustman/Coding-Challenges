// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

function divisibleByThree(str){

    //split, map to a number, then reduce and use modulus to see if it is divisible by 3
    return str.split('').map(Number).reduce((acc,num) => acc + num,0) % 3 === 0
  }
  
  //P: will be a string of numbers
  // R: return a boolean representing if the sum of string numbers can be divisible by 3
  // E: '7' => false '12' -> true