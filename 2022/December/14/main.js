// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.



function ransomNote(ransom,magazine) {
    //get array of splitted ransom magazine words
    let splittedRansom = ransom.split(' ')
    let magSplitted = magazine.split(' ')
    //create hash that stores each word 
    let hash = {}
    for (let i = 0; i < magSplitted.length; i++) {
      hash[magSplitted[i]] = hash[magSplitted[i]] + 1 || 1
    }
    //do for loop through ransom string. 
    //if theres a match, decrease by 1
    //if less than 0, return false
    //if no match, return false
  
    for (let i =0; i < splittedRansom.length; i++) {
      if (hash[splittedRansom[i]]) {
        hash[splittedRansom[i]]--
        if (hash[splittedRansom[i]] < 0) {
          return false
        }
      } else {
        return false
      }
    }
    
    //return true
    return true
  }
  
  
  //Will be given a string. unclear if always will be string, or sometimes letters, symbols. seems like itll always be a string of words
  //Return a boolean representing if its possible to 'cut out' and create a ransom note from the magazine of words
  //E:'sit ad est sint' => true, because you can find all of those words in magazine
  const magazine =
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  
  console.log(ransomNote("sit ad est sint", magazine),true)
  console.log(ransomNote("sit ad est love", magazine),false)
  console.log(ransomNote("sit ad est sint in in", magazine), true)
  console.log(ransomNote("sit ad est sint in in in in", magazine), false)
  
  
  
  