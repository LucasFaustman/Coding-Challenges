// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  
    //   I want to slice the array since I can't mutate the original
    // I can first create a variable that holds the index of the minimum
    
    const indexOfMin = numbers.indexOf(Math.min(...numbers))
    // then return a new array using slice. I can slice out the min number, then concat the rest
    return numbers.slice(0,indexOfMin).concat(numbers.slice(indexOfMin+1))
    }
    
    // P: Will always be an array of integers. DO NOT MUTATE ORIGINAL ARRAY
    // R: Return a new array with the smallest value gone
    // E: [1,2,3,4,5] => [2,3,4,5] [3,2,4,1,5] => [3,2,4,5]