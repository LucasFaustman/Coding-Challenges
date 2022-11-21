// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

const removeConsecutiveDuplicates = s => {
    let newS = s.split(' ')
    
    for (let i = 0; i < newS.length; i++) {
      if (newS[i] === newS[i+1]) {
        newS.splice(i,1)
        i--
      }
    }
    return newS.join(' ')
  }
  
  //Will be a string. unclear if always will be a string, always valid, never symbols or numbers
  //Return a new string getting rid of all duplicates
  //Ealpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta
  
//   --> "alpha beta gamma delta alpha beta gamma delta"

