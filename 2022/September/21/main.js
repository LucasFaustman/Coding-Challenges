// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

function solve(arr){
    //i can use the filter method. see if element.includes(-element)

  let filteredArr = arr.filter(element => !arr.includes(-element))
    //filter again to get rid of duplicates using newSet. also need to .join and wrap everything in number
  return Number([...new Set(filteredArr)].join(''))
};

//P: will be an array. array will have both pos and neg numbers. seems like always valid
// R: return an integer representing the one number that doesnt have a positive and negative number found in the array
// E: [1, -1, 2, -2, 3] => 3 