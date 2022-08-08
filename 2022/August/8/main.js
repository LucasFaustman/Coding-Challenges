// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){

    //i can create two variables. one math.min, the other math.max to get the largest and smallest number of the array
    let youngestAge = Math.min(...ages)
    let oldestAge = Math.max(...ages)
    
    //then return an array with values.
    
    return [youngestAge, oldestAge, oldestAge - youngestAge]
  }
  
  //P: will be an array of integers. unclear if always will be an array and will always have integers
  // R: return an array where the first element is the smallest number, second largest, and 3rd the difference between the two
  // E: [5,10,60,20,30] => [5,60,55]