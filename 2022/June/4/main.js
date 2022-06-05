// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
    //   I can probably just do a conditional here.
    //   Once the number gets over 6, it seems like it resets. for example, 7 is equal to i love you. meaning 8 must be a little.
    //  I can create a new variable called n that holds num of petals modulus 6 to find what petal response to give out
      
      let n = nbPetals % 6
      
        if (n % 6 === 0) {
          return 'not at all'
        } else if (n % 5 === 0) {
          return 'madly'
        } else if (n % 4 === 0) {
          return 'passionately'
        } else if (n % 3 === 0) {
          return 'a lot'
        } else if (n % 2 === 0) {
          return 'a little'
        } else if (n % 1 === 0) {
          return 'I love you'
        } 
      
    }
    
    // P: will always be a number
    // Return a string based on the number of petals
    // E: 2 => 'a little'