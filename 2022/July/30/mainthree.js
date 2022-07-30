// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
    //Im going to say a for loop here
  //   first create an array
    let newArr = []
  //   then the for loop. starts at a, ends at b, goes up by one
    for (let i = a; i <= b; i++) {
      // convert i to a string, split it, map and make each element to the power of its index + 1.
  //     , reduce, then see if that number is equal to i
      
      if (i === i.toString().split('').map((element,index) => Math.pow(element,index+1))
         .reduce((acc,num) => acc + num)) {
        //if true, add to newarr
        newArr.push(i)     
      }
    }
    //return newarr
    return newArr
  }
  
  // P: two numbers. integers. unclear if always positive
  // R: return a list of sorted numbers that contains numbers that equal itself when each
  // digit is to the power of its index
  // E; 1,100 -> [1,2,3,4,5,6,7,8,9.89]