// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves)
{
  //first declare a new obj to hold colours
  let newObj = {}
  
  //then a for loop
  
  for (let i = 0; i < gloves.length; i++) {
    //add 1 to property if theres a match in the obj
    if (newObj[gloves[i]]) {
      newObj[gloves[i]] += 1
    } else
      //if no match, assign new property to 1
      newObj[gloves[i]] = 1
  }
  
  //then return newObj with just the values since we don't need the colour anymore. map each element to divide by 2 for pairs
  //Use math.floor to get rid of decimals
  //then add using reduce
  
  return Object.values(newObj).map(element => Math.floor(element / 2)).reduce((acc,num) => acc + num,0)
}

//Will be an array of words. seems like always an array of words.
//Return the number of pair of gloves that we can get from the gloves we have in the drawer. only like colours can form pair
//E: ["red", "green", "red", "blue", "blue"] => 2, because 1 red pair and one blue pair