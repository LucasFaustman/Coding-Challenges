// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

// Sort Santa's Reindeer
// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

// Notes:
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order

function sortReindeer(reindeerNames) {
    //Maybe I can just use the sort method
    
  return reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
  
  }
  
  //Will be an array of strings. Each string is composed of two words,or names. Unclear if always valid
  //Might be lower or uppercase letters
  //Return a new array of strings where the array of strings is sorted by the first letter of the second word
  //of each string