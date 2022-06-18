// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

function findDifference(a, b) {
    //loading...
  //   I can definitely utilize reduce here to multiply to get the value of each array
  //   I can create 2 variables representing a and b. then minus the two
    const aSum = a.reduce((acc,num) => acc * num,1)
    const bSum = b.reduce((acc,num) => acc * num,1)
    
    return Math.abs(aSum - bSum)
  }
  
  // P: 2 arrays of integers being passed in. Each array will be an array that consists of 3 numbers > 0
  // R: Return a single number representing the difference between the two lists
  // E: [1,2,3] [3,4,5] => 6 , 12 => 6