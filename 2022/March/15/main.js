// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
    //   P: I can make a for loop that loops throught he first array. I can then add or minus the total amount of people
    // on the bus
      let totalPeople = 0
      for (let i =0; i < busStops.length; i++) {
        totalPeople += busStops[i][0]
        totalPeople -= busStops[i][1]
      }
      return totalPeople
    }
    // P: an array of arrays! Each array has two numbers. First number represents number of people getting on bus. Second
    // Reprents num of people getting off. Will always be a number and might be 0
    // R: Return a number which represents people on the bus
    // E: [[10,0],[3,5] , [5,8]] => 0