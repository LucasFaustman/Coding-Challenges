// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// TODO


//map method
Array.prototype.square = function () {
    return this.map(element => element**2)
}

//map method again but to the power of 3

 Array.prototype.cube = function () {
    return this.map(element => element**3)
  }

  //reduce sum then / this.length


 Array.prototype.average = function () {
    return this.reduce((acc,num) => acc + num,0)/this.length
  }

  //just use reduce


 Array.prototype.sum = function () {
    return this.reduce((acc,num) => acc + num,0)
  }

  //filter with modulus


 Array.prototype.even = function () {
    return this.filter(element => element % 2 === 0)
  }

  //filter with modulus again but for elements that dont equal 0


 Array.prototype.odd = function () {
    return this.filter(element => element % 2 !== 0)
  }